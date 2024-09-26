const { buildSchema } = require('graphql');

const schema = buildSchema(`
   type GhostUncle { 
    blockHash: String
    miner: String
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
  }

  type Transaction {
    txId: String
    version: Int
    gasAmount: Int
    gasPrice: String
    inputs: [String]
    fixedOutputs: [Output]
  }

  type Output {
    hint: Int
    key: String
    attoAlphAmount: String
    address: String
    tokens: [String]
    lockTime: Float
    message: String
  }
 
  type Query {
    getBlocks(fromTs: Float!, toTs: Float!): [Block]
    getBlockByHash(hash: String!): Block
  }
`);

module.exports = schema;
