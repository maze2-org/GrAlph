import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import mongoose from 'mongoose';
import schema from './graphql/schema';
import rootValue from './graphql/resolvers';

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/alephium')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// GraphQL middleware for handling queries
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
}));

export default app;
