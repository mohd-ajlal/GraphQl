import mongoose from "mongoose";

export const connectDB = (uri: string) =>
  mongoose
    .connect(uri)
    .then((c) => {
      console.log(`MongoDB connected to ${c.connection.name}`);
    })
    .catch((err) => {
      console.log(`MongoDB connection error: ${err.message}`);
    });
