const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  unsigned: {
    txId: { type: String },
    version: { type: Number },
    networkId: { type: Number },
    gasAmount: { type: Number },
    gasPrice: { type: String },
    inputs: { type: Array },
    fixedOutputs: [
      {
        hint: { type: Number },
        key: { type: String },
        attoAlphAmount: { type: String },
        address: { type: String },
        tokens: { type: Array },
        lockTime: { type: Number },
        message: { type: String }
      }
    ]
  },
  scriptExecutionOk: { type: Boolean },
  contractInputs: { type: Array },
  generatedOutputs: { type: Array },
  inputSignatures: { type: Array },
  scriptSignatures: { type: Array }
});

const blockSchema = new Schema({
  hash: { type: String, required: true },
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
      blockHash: String,
      miner: String
    }
  ]
});

module.exports = mongoose.model('Block', blockSchema);
