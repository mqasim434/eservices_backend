const dotenv = require('dotenv').config();

const PORT = process.env.PORT;
const MONODB_CONNECTION_STRING = process.env.MONODB_CONNECTION_STRING;

module.exports = {
    PORT,
    MONODB_CONNECTION_STRING
}
