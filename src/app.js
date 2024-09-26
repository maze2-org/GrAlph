const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./graphql/schema');
const rootValue = require('./graphql/resolvers');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/alephium');

// GraphQL middleware for handling queries
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
}));


module.exports = app;
