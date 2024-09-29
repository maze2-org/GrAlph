# Alephium Blocks Fetcher

## Features

- Fetch blocks from the Alephium blockchain.
- Resolve addresses to names using reverse name resolvers.
- Store resolved address data in MongoDB.

## Installation

To install the required dependencies, run the following command:

```bash
npm install
```

## Running the Project

### Build the Project

To build the TypeScript project, use the following command:

```bash
npm run build
```

### Start the Server

To start the server, use the following command:

```bash
npm run start:server
```

### Development Mode

To run the server in development mode with live TypeScript compilation, use:

```bash
npm run dev:server
```

## Fetching Data from Alephium Blockchain

To fetch blocks and resolve addresses from the Alephium blockchain, run the following command:

```bash
npm run start:fetch
```

Or for development:

```bash
npm run dev:fetch
```

## Using GraphQL to Query Data

### Endpoint:

> http://localhost:4000/graphql

### Sample Query

Here’s a sample query you can use to get names:

```graphql
query getNames {
    getNames {
        name
        address
        addressGroup
    }
}
```
