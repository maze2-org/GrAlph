const Block = require('../models/Block');

const rootValue = {
    getBlocks: async ({ fromTs, toTs }) => {
      return Block.find({timestamp: {$gte: fromTs, $lte: toTs}});
    },

    getBlockByHash: async (_, { hash }) => {
      return Block.findOne({ hash });
    },

};

module.exports = rootValue;
