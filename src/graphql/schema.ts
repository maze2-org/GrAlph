import {buildSchema} from 'graphql';

const schema = buildSchema(`
  type Block {
    hash: String!
    timestamp: Float!
    height: Int!
    nonce: String
  }
  
  type Name {
    name: String!
    address: String
    addressGroup: Int
  }

  type Query {
    getBlocks(fromTs: Float!, toTs: Float!): [Block]
    getNames: [Name]
    getAddressByName(name: String!): Name
    getNameByAddress(address: String!): Name
  }
`);

export default schema;
