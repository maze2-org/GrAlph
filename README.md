# Alephium Blocks Fetcher

## Features

- Fetch blocks from the Alephium blockchain.
- Store block data in MongoDB.
- Query block data using GraphQL.

## Installation

To install the required dependencies, run the following command:

```bash
npm install
```

## Running the Project

To start the server, use the following command:

```bash
node src/server.js 
```

## Import Process

To fetch blocks from the Alephium blockchain, run the following command:

```bash
node src/cli/commands.js fetch-blocks --fromTs 1727195258000
```

> **fromTs** is the block timestamp (in milliseconds) from which you want to start fetching blocks.


## Using GraphQL to Get Blocks

You can use the following GraphQL endpoint to fetch block data:

### Endpoint:
```bash
http://localhost:4000/graphql
```

### Sample Query

Here’s a sample query you can use to get blocks:

```bash
query getBlocks($fromTs: Float!, $toTs: Float!) {
  getBlocks(fromTs: $fromTs, toTs: $toTs) {
    chainFrom
    chainTo
    nonce
    version
    depStateHash
    txsHash
    target
  }
}
```

Query variables:

```bash
{
  "fromTs": 1727302100464,
  "toTs": 1727302446094
}
```


