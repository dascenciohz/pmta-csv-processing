'use strict'

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const config = require('./config/index');

// Connection to MongoDB
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
   family: 4
};

if (config.node_env === 'PROD') {
    mongoose.connect(config.mongo_uri_prod, options)
    .then(db => console.log('PROD Database is Connected.'))
    .catch(err => console.log(err));
} else {
    mongoose.connect(config.mongo_uri_dev, options)
    .then(db => console.log('DEV Database is Connected.'))
    .catch(err => console.log(err));
}

// Settings
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api', require('./src/routes/index.js'));
app.use('/api/directories', require('./src/routes/files.js'));
app.use('/api/logs', require('./src/routes/logs.js'));

// Start express server
app.listen(config.node_port, () => {
    console.log(`Server is running on port ${config.node_port}`)
});