const mongoose = require('mongoose');
const {MONODB_CONNECTION_STRING} = require('../config/index');

const dbConnect = async () => {
    try{
        const conn = await mongoose.connect("mongodb://mq30003:eServices@ac-fpfno9x-shard-00-00.9ldaijc.mongodb.net:27017,ac-fpfno9x-shard-00-01.9ldaijc.mongodb.net:27017,ac-fpfno9x-shard-00-02.9ldaijc.mongodb.net:27017/?ssl=true&replicaSet=atlas-u16kgo-shard-0&authSource=admin&retryWrites=true&w=majority");
        console.log(`Database is connected to host ${conn.connection.host}`);        
    }
    catch(error){
        console.log(`Error: ${error}`);
    }
}

module.exports = dbConnect;