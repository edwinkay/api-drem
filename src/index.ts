import Server from "./models/server";
import dotenv from 'dotenv'

//aqui configuramos las variables de ambiente
dotenv.config();

const server = new Server();