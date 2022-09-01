import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 5000;
export const Mongodb_URL =  process.env.MONGODB_URL || 'mongodb://localhost/ricars'