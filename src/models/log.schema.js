
'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const LogFile = require('./file.schema').schema;

const schema = new Schema({
    type: { type: String },
    timeLogged: { type: String },
    timeQueued: { type: String },
    orig: { type: String },
    rcpt: { type: String },
    orcpt: { type: String },
    dsnAction: { type: String },
    dsnStatus: { type: String },
    dsnDiag: { type: String },
    dsnMta: { type: String },
    srcType: { type: String },
    srcMta: { type: String },
    dlvType: { type: String },
    dlvSourceIp: { type: String },
    dlvDestinationIp: { type: String },
    dlvEsmtpAvailable: { type: String },
    dlvSize: { type: String },
    vmta: { type: String },
    jobId: { type: String },
    envId: { type: String },
    queue: { type: String },
    vmtaPool: { type: String }
//    logfile: LogFile
});

module.exports = mongoose.model('log', schema);