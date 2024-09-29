import mongoose from 'mongoose';

export type ResolvedAddress = {
  id: string;
  name: string;
  address: string;
  addressGroup: number;
  createdAt: string;
}

const resolvedAddressSchema = new mongoose.Schema({
  name: {type: String, required: true},
  address: {type: String, required: true, unique: true},
  addressGroup: {type: Number, required: true},
  createdAt: {type: Date, default: Date.now},
});

export const ResolvedAddress = mongoose.model('ResolvedAddress', resolvedAddressSchema);

export const storeResolvedAddress = async (resolvedData: Omit<ResolvedAddress, 'id' | 'createdAt'>) => {
  const {name, address, addressGroup} = resolvedData;

  const resolvedAddress = new ResolvedAddress({
    name,
    address,
    addressGroup,
    createdAt: new Date(),
  });

  try {
    await resolvedAddress.save();
    console.log(`✅ Successfully saved resolved address: ${name} for address: ${address}`);
  } catch (error: any) {
    if (error["code"] === 11000) {
      console.error("✅ Resolved address already exists");
    } else {
      console.error(`❌ Error saving resolved address:`, error);
    }
  }
};
