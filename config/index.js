module.exports = Object.freeze({
    node_env : process.env.NODE_ENV || 'DEV',
    node_port : process.env.NODE_PORT || 3000,
    mongo_uri_prod : process.env.MONGO_URI,
    mongo_uri_dev : 'mongodb://pmta_status:qwe123@ds135456.mlab.com:35456/pmta_status',
    pmta_filelogs: process.env.PMTA_LOG_DIR || '/var/log/pmta/'
});