require("dotenv").config();
const express = require("express");
const cors = require("cors");
const {db} = require('./DB/dataBase.js')
const {readdirSync} = require('fs')
const app = express();

const PORT = process.env.PORT;

// Middlewares:

app.use(express.json());
app.use(cors());

//Routes:
readdirSync('./routes').map(route => app.use('/api/v1', require('./routes/' + route)));



const server = () => {
  app.listen(PORT, () => {
    db();
    console.log("You are listening to port: ", PORT);
  });
};

server();
 