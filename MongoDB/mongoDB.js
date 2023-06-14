import mongoose from "mongoose";
const serverPoint = "mongodb://127.0.0.1:27017/PeopleData";
export const connectToMongo = async () => {
  try {
    const connection = await mongoose.connect(serverPoint);
    console.log({ connection: "success", message: connection });
  } catch (error) {
    console.log(error.message);
  }
};
