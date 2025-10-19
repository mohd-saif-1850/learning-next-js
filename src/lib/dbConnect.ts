import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

const dbConnect = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("Database Already Connected !");
  }

  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI || "");

    connection.isConnected = connect.connections[0].readyState;

    console.log("Database Connected Successfully !");
  } catch (error) {
    console.log("Database Failed to Connect !");

    process.exit(1);
  }
};

export default dbConnect;