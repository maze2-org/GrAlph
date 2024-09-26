const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  txId: { type: String },
  contractAddress: { type: String },
  eventIndex: { type: Number },
  fields: [
    {
      type: {
        type: String, // 'Address' or 'U256'
      },
      value: { type: String }
    }
  ]
});

const transactionSchema = new Schema({
  unsigned: {
    txId: { type: String },
    version: { type: Number },
    networkId: { type: Number },
    gasAmount: { type: Number },
    gasPrice: { type: String },
    inputs: [
      {
        outputRef: {
          hint: { type: Number },
          key: { type: String }
        },
        unlockScript: { type: String }
      }
    ],
    fixedOutputs: [
      {
        hint: { type: Number },
        key: { type: String },
        attoAlphAmount: { type: String },
        address: { type: String },
        tokens: [
          {
            id: { type: String },
            amount: { type: String }
          }
        ],
        lockTime: { type: Number },
        message: { type: String }
      }
    ]
  },
  scriptExecutionOk: { type: Boolean },
  contractInputs: [
    {
      hint: { type: Number },
      key: { type: String }
    }
  ],
  generatedOutputs: [
    {
      type: { type: String }, // 'AssetOutput' or 'ContractOutput'
      hint: { type: Number },
      key: { type: String },
      attoAlphAmount: { type: String },
      address: { type: String },
      tokens: [
        {
          id: { type: String },
          amount: { type: String }
        }
      ],
      lockTime: { type: Number },
      message: { type: String }
    }
  ],
  inputSignatures: { type: [String] },
  scriptSignatures: { type: [String] }
});

const blockSchema = new Schema({
  hash: { type: String, required: true, unique: true },
  timestamp: { type: Number, required: true },
  chainFrom: { type: Number },
  chainTo: { type: Number },
  height: { type: Number, required: true },
  deps: { type: [String] },
  transactions: [transactionSchema],
  nonce: { type: String },
  version: { type: Number },
  depStateHash: { type: String },
  txsHash: { type: String },
  target: { type: String },
  ghostUncles: [
    {
      blockHash: { type: String },
      miner: { type: String }
    }
  ],
  events: [eventSchema]
});

blockSchema.index({ hash: 1 }, { unique: true });

module.exports = mongoose.model('Block', blockSchema);
