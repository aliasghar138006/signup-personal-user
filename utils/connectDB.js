import mongoose from "mongoose";

export default async function Connect() {
  try {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(
      "mongodb+srv://aliasgharshahneh1380:12345@cluster0.nbakisu.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Connect To DB");
  } catch (error) {
    console.log(error);
    console.log("Connection Faild!!!");
  }
}
