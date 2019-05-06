module.exports = Object.freeze({
    node_env : process.env.NODE_ENV || 'DEV',
    node_port : process.env.NODE_PORT || 3000,
    mongo_uri_prod : process.env.MONGO_URI_PROD,
    mongo_uri_dev : 'mongodb://admin:qwe123@172.17.0.2:27017/pmta_status',
    pmta_filelogs: process.env.PMTA_LOG_DIR || '/var/log/pmta/'
});