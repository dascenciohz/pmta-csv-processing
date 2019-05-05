const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const 

const newLogSchema = new Schema({
    type: String,
    timeLogged: String,
    timeQueued: String,
    orig: String,
    rcpt: String,
    orcpt: String,
    dsnAction: String,
    dsnStatus: String,
    dsnDiag: String,
    dsnMta: String,
    srcType: String,
    srcMta: String,
    dlvType: String,
    dlvSourceIp: String,
    dlvDestinationIp: String,
    dlvEsmtpAvailable: String,
    dlvSize: String,
    vmta: String,
    jobId: String,
    envId: String,
    queue: String,
    vmtaPool: String
});

module.exports = mongoose.model('schema', newLogSchema);