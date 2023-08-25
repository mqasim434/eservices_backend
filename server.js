const express = require('express');
const dbConnect = require('./database/index');
// const {PORT} = require('./config/index');
const PORT = 5000;
const router = require('./routes/users');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(router);
app.use(express.json);
dbConnect();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//eServices434