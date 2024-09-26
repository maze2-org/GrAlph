const Block = require('../models/Block');

const rootValue = {
    getBlocks: async ({ fromTs, toTs }) => {
      return Block.find({timestamp: {$gte: fromTs, $lte: toTs}});
    },

    getBlockByHash: async ({ hash }) => {
      return Block.findOne({ hash });
    },

  getTransactionsByAddress: async ({ address }) => {
    const block = await Block.aggregate([
      {
        $match: {
          "transactions.unsigned.fixedOutputs.address": address
        }
      },
      {
        $unwind: "$transactions"
      },
      {
        $match: {
          "transactions.unsigned.fixedOutputs.address": address
        }
      },
      {
        $group: {
          _id: null,
          allTransactions: { $push: "$transactions" }
        }
      },
      {
        $project: {
          _id: 0,
          allTransactions: 1
        }
      }
    ]);
    return block?.[0]?.allTransactions || [];
  },

};

module.exports = rootValue;
