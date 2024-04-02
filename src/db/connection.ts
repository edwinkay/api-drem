import mongoose from "mongoose";

export async function startConnect() {
  const password = "moM5f3AodwLE5d0A";
  const uri = `mongodb://drenvio:${password}@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin`;

  const mongooseOptions: mongoose.ConnectOptions = {};

  try {
    await mongoose.connect(uri, mongooseOptions);
    console.log("Conexión exitosa a MongoDB Atlas");
  } catch (error) {
    console.error("Error de conexión a MongoDB Atlas:", error);
  }
}