import axios from "axios";
import dotenv from 'dotenv';
import {Command} from 'commander';
import {
  web3,
  hexToString,
  NodeProvider,
  Subscription,
  ContractEvent,
  groupOfAddress,
  addressFromContractId,
  subscribeContractEvent
} from '@alephium/web3';

import {connectToMongo} from "../db/connect";
import {storeEvent} from "../models/Event";
import {getLastImportedBlockHash, storeBlock} from "../models/Block";
import {ResolvedAddress, storeResolvedAddress} from '../models/ResolvedAddress';
import {FarmTypes, ReverseNameResolverInstance} from '../artifacts/ts';
import NameCreatedEvent = FarmTypes.NameCreatedEvent;

dotenv.config();

const API_KEY = process.env.API_KEY;
const NODE_URL = process.env.NODE_URL || 'http://127.0.0.1:12973';

web3.setCurrentNodeProvider(NODE_URL)
const nodeProvider = new NodeProvider(NODE_URL, API_KEY);

const REVERSE_NAME_RESOLVERS: string[] = [
  '6c7075ed4c407c4e20ae39341820240a4065fe69c3840960d2ee2633daf8b000',
  '40be2751efbf30395c079278972fbe6838f53a6e240f7b30ebfe877b7dddcd01',
  'cff6d6016d3160fd5818d92effa79594a4dceec572895d953f1a76f0163ff902',
  '5777c6381f8dd67297793a4eb6d1e8a1f0de545f5fa4e129d25f4f08d382bd03',
];

type Name = {
  name: string;
  address: string;
  capitalisation: string;
  expires: bigint;
};

// Subscribe to contract events by group
const subscribeToEvents = async (name: Name, startBlockHash: string) => {
  const group = groupOfAddress(name.address);
  const reverseNameResolverContractId = REVERSE_NAME_RESOLVERS[group];
  const reverseNameResolver = new ReverseNameResolverInstance(addressFromContractId(reverseNameResolverContractId));

  try {
    console.log(`📡 Subscribing to events for address: ${name.address}`);
    const nameString = (await reverseNameResolver.view.getNameByAddress({args: {address: name.address}})).returns;
    console.log('Resolved name for address:', hexToString(nameString));

    subscribeContractEvent(
      // @ts-ignore
      reverseNameResolver,
      nodeProvider,
      {
        messageCallback: async (event: NameCreatedEvent) => {
          console.log('📬 Received NameCreated event:', event);
          const eventData = {
            blockHash: event.blockHash,
            txId: event.txId,
            eventIndex: event.eventIndex,
            nftIndex: event.fields.nftIndex,
            name: hexToString(event.fields.name),
            capitalisation: hexToString(event.fields.capitalisation),
            creator: event.fields.creator,
            expires: event.fields.expires,
            timestamp: Date.now(),
          };
          await storeEvent(eventData);
        },
        errorCallback: (error: any, subscription: Subscription<ContractEvent<any>>) => {
          console.error('❌ Error receiving NameCreated event:', error);
          subscription.unsubscribe();
        },
      },
      'NameCreatedEvent',
      startBlockHash
    );
  } catch (error) {
    console.error('❌ Error subscribing to events by group:', error);
  }
};

const resolveAddressToName = async (address: string): Promise<Omit<ResolvedAddress, 'id' | 'createdAt'> | null> => {
  console.log(`🔍 Attempting to resolve address: ${address}`);

  try {
    const addressGroup = groupOfAddress(address)
    const reverseNameResolverContractId = REVERSE_NAME_RESOLVERS[addressGroup]
    const reverseNameResolver = new ReverseNameResolverInstance(addressFromContractId(reverseNameResolverContractId));

    // Fetch the name associated with the address
    const nameString = (await reverseNameResolver.view.getNameByAddress({args: {address: address}})).returns;

    // Check if a name was returned
    if (nameString) {
      const name = hexToString(nameString);
      console.log(`✅ Successfully resolved address: ${address} to name: ${name}`);
      return {name, address, addressGroup}
    } else {
      console.log(`⚠️ No name found for address: ${address} in group: ${addressGroup}`);
    }
  } catch (error: any) {
    console.log(error.message)
    if (error.message.includes('does not exist')) {
      console.log(`⚠️ No name found for address: ${address}`);
    } else {
      console.error(`❌ Error resolving address: ${address}. Error:`, error);
    }
  }

  console.log(`❌ No valid name found for address: ${address}`);
  return null;
};

// Main function to execute the command
async function command() {
  console.log('API_KEY', API_KEY)
  console.log('NODE_URL', NODE_URL)
  await connectToMongo();

  let lastImportedBlockHash = await getLastImportedBlockHash();
  // Start with the last imported block hash or a predefined starting block
  // const startBlockHash = lastImportedBlockHash || '0000000000000000000000000000000000000000000000000000000000000001';
  const startingBlockHash = lastImportedBlockHash || '00000000000008de537efe4ad1beb32f839f2974dea1aaf2733c4710cefbd9b7';

  let currentBlockHash = startingBlockHash;
  console.log(`🚀 Starting block hash: ${currentBlockHash}`);

  while (currentBlockHash) {
    try {
      const {data: block} = await axios.get(`${NODE_URL}/blockflow/blocks/${currentBlockHash}`, {
        headers: {
          'x-api-key': API_KEY
        }
      });
      await storeBlock({
        hash: block.hash,
        nonce: block.nonce,
        height: block.height,
        timestamp: block.timestamp,
      })

      for (const transaction of block.transactions) {
        console.log(`🔄 Processing transaction ID: ${transaction.unsigned.txId}`);

        for (const fixed of transaction.unsigned.fixedOutputs) {
          const address = fixed.address;
          console.log(`🔗 Resolving name for address: ${address}`);

          const resolvedData = await resolveAddressToName(address);
          if (resolvedData) {
            console.log(`✅ Resolved name: ${resolvedData.name}`);
            await storeResolvedAddress(resolvedData); // Save the resolved name to the database

            // await subscribeToEventsByGroup(resolvedData, currentBlockHash);
            // console.log(`📩 Subscribed to events for name: ${resolvedData.name}`);
          } else {
            console.log(`❌ No valid name found for address: ${address}`);
          }
        }
      }

      // Set the next block hash for the next iteration
      currentBlockHash = block.deps[block.deps.length - 1];
      console.log(`➡️ Next block hash: ${currentBlockHash}`);
    } catch (error) {
      console.error(`⚠️ Error fetching block or processing transactions:`, error);
      break;
    }
  }
}

// Execute the command with the parameter from the command line
const program = new Command();
program
  .command('fetchBlocks')
  .action(async () => {
    await command();
  });

program.parse(process.argv);

// Example
// {
//   name: 'deadrare',
//   address: '1B6TvrNuv4aCMEUYncJaC5maPh8Qjw9hsh9wCrBFxTRPE',
//   capitalisation: 'Deadrare',
//   expires: 1751650132718n
// }

