import {connect, connection, connections} from "mongoose";
import { Mongodb_URL } from "./config";

export const connectToMongoose = async () => {
    try {
        await connect(Mongodb_URL);
    } catch (error) {
        console.log(error);
    }
    
}

connection.on("connected", () => {
    console.log("DB iniciada : ", connection.db.databaseName);
})

connection.on("error", (e) => {
    console.log("error : ", e);
});

connection.on("disconnect", () => {
    console.log("DB desconectada");
});

