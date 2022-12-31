const express = require('express');
const cors = require('cors');
const app = require('./app')
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path:path.join(__dirname,"config/config.env")});

const connectDB = require('./config/db.conn');

const port = process.env.PORT;

app.use(cors);
app.use(express.json());

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port: ${port} in environment: ${process.env.NODE_ENV}`);
});