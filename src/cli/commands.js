const axios = require('axios');
const mongoose = require('mongoose');
const Block = require('../models/Block');
const { Command } = require('commander');
const program = new Command();

async function commands(fromTs) {
  if (!fromTs) {
    console.error('❌Please provide fromTs as a parameter.');
    return;
  }
  try {
    await mongoose.connect('mongodb://localhost:27017/alephium');

    while (true) {

      const toTs = fromTs + 1800000;

      const { data } = await axios.get('https://node-v20.mainnet.alephium.org/blockflow/blocks-with-events', {
        params: { fromTs, toTs }
      });

      const blocks = data?.blocksAndEvents?.flatMap(blockArray => blockArray.map(blockItem => blockItem.block)) || [];

      if (blocks.length === 0) {
        console.log('⚠️No blocks found for the specified time range.');
        continue;
      }

      const uniqueBlocks = await Promise.all(blocks.map(async (block,index) => {
        const exists = await Block.exists({ hash: block.hash });
        return exists ? null : block;
      }));
      const newBlocks = uniqueBlocks.filter(block => block !== null);

      if (newBlocks.length > 0) {
        await Block.insertMany(newBlocks);
        console.log(`✅ Inserted ${newBlocks.length} new blocks.`);
      } else {
        console.log('⚠️No new blocks to insert.');
      }

      fromTs = toTs;

      if (fromTs >= Date.now()) {
        console.log('✅Reached the current time, stopping fetch.');
        break;
      }

      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  } catch (error) {
    console.error('❌Error fetching or saving blocks:', error);
  } finally {
    mongoose.connection.close().catch();
  }
}

program
  .command('fetch-blocks')
  .description('Fetch blockchain blocks from Alephium and save to MongoDB')
  .option('--fromTs <fromTs>', 'Start timestamp for blocks in milliseconds', parseInt)
  .action(async (cmdObj) => {
    const { fromTs } = cmdObj;
    await commands(fromTs);
  });

program.parse(process.argv);
