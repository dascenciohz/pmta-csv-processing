'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String },
    processed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    processedAt: { type: Date }
});

module.exports = mongoose.model('logFile', schema);