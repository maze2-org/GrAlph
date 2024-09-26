const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type GhostUncle { 
    blockHash: String
    miner: String
  }

  type Token {
    id: String
    amount: String
  }

  type Output {
    type: String
    hint: Int
    key: String
    attoAlphAmount: String
    address: String
    tokens: [Token]
    lockTime: Float
    message: String
  }

  type InputRef {
    hint: Int
    key: String
  }

  type UnsignedTransaction {
    txId: String
    version: Int
    networkId: Int
    gasAmount: Int
    gasPrice: String
    inputs: [InputRef]
    fixedOutputs: [Output]
  }

  type Transaction {
    unsigned: UnsignedTransaction
    scriptExecutionOk: Boolean
    contractInputs: [InputRef]
    generatedOutputs: [Output]
    inputSignatures: [String]
    scriptSignatures: [String]
  }

  type EventField {
    type: String
    value: String
  }

  type Event {
    txId: String
    contractAddress: String
    eventIndex: Int
    fields: [EventField]
  }
  
  type Block {
    hash: String!
    timestamp: Float!
    chainFrom: Int
    chainTo: Int
    height: Int!
    deps: [String]
    transactions: [Transaction]
    nonce: String
    version: Int
    depStateHash: String
    txsHash: String
    target: String
    ghostUncles: [GhostUncle]
    events: [Event]
  }

  type Query {
    getBlocks(fromTs: Float!, toTs: Float!): [Block]
    getBlockByHash(hash: String!): Block
    getTransactionsByAddress(address: String!): [Transaction]
  }
`);

module.exports = schema;
