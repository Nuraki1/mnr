import {MongoClient} from "mongodb";

import {MONGODB_URI, DATABASE_NAME} from "./config"

let connectedClient;

export const connectClient = async ()=>{

    if(connectedClient){
        connectedClient.db(DATABASE_NAME);
    }

    const client = new MongoClient(MONGODB_URI);
    await client.connect()   //async call 
    await client.db(DATABASE_NAME).command({ping: 1});//ping command: to test the client is connected successfuly
    console.info("connected to MongoDB"); 

    connectedClient = client;           // To cache the function to connect to the client the 1st time we call it

    return connectedClient.db(DATABASE_NAME)
};



export const stopClient = async ()=>{
    return connectedClient?.close();

}


// use the test data provided under the copy/src/dev folder