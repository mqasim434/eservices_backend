const mongoose = require('mongoose');
const {MONODB_CONNECTION_STRING} = require('../config/index');

const dbConnect = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://mq30003:heC_Services@eservices.9ldaijc.mongodb.net/?retryWrites=true&w=majority");
        console.log(`Database is connected to host ${conn.connection.host}`);
    }
    catch(error){
        console.log(`Error: ${error}`);
    }
}

module.exports = dbConnect;