import mongoose from 'mongoose';

export type Event = {
  blockId: string;
  transactionId: string;
  eventIndex: number;
  eventData: any;
  timestamp: number;
}

const eventSchema = new mongoose.Schema({
  blockHash: {type: String, required: true},
  txId: {type: String, required: true},
  eventIndex: {type: Number, required: true},
  eventData: {type: Object, required: true},
  timestamp: {type: Number, required: true},
});

const Event = mongoose.model('Event', eventSchema);

export const storeEvent = async (eventData: any) => {
  try {
    const event = new Event(eventData);
    await event.save();
    console.log(`✅ Stored event from block ${eventData.blockId}, transaction ${eventData.txId}`);
  } catch (error) {
    console.error('❌ Error storing event data:', error);
  }
};
