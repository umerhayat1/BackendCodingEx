import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI:any = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI not found in environment variables');
}

export async function connectDatabase() {
  await mongoose.connect(MONGODB_URI);
  console.log('Connected to database');
}