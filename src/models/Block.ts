import mongoose from 'mongoose';

export type Block = {
  id: string;
  hash: string;
  timestamp: number;
  height: number;
  nonce: string;
  createdAt: string;
}

const blockSchema = new mongoose.Schema({
  hash: {type: String, required: true, unique: true},
  timestamp: {type: Number, required: true},
  height: {type: Number, required: true},
  nonce: {type: String},
});

export const Block = mongoose.model('Block', blockSchema);

export const storeBlock = async (blockData: Omit<Block, 'id' | 'createdAt'>) => {
  const newBlock = new Block({
    ...blockData,
    createdAt: new Date(),
  });

  try {
    await newBlock.save();
    console.log(`✅ Successfully saved block: ${blockData.hash}`);
  } catch (error: any) {
    if (error["code"] === 11000) {
      console.error(`✅ Block: ${blockData.hash} already exists`);
    } else {
      console.error(`❌ Error saving block: ${blockData.hash}`, error);
    }
  }
};

export const getLastImportedBlockHash = async () => {
  console.log('📜 Fetching last imported blockHash from MongoDB');
  const block = await Block.findOne().sort({hash: -1}).exec();
  return block ? block.hash : null;
};

