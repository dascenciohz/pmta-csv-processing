'use strict'

const logSchema = require('../models/log.schema');
const dirSchema = require('../models/file.schema');
const config = require('../../config/index');
const path = require('path');
const fs = require('fs');
const csv = require('csv-parser');
var results = [];

const list = async (req, res) => {
    const listLogs = await logSchema.find();
    console.log(listLogs);
    res.json({Message: "Logs Listed"});
};

const sync = async (req, res) => {
    const listDirLogFiles = await dirSchema.find();
    listDirLogFiles.forEach(function(dir) {
        if (dir.processed === 'false') {
            fs.createReadStream(config.pmta_filelogs + dir.name)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                logSchema.collection.insertMany(results)
                .then(result => {
                    console.log('Successfully inserted items!');
                    return result
                })
                .catch(err => console.error('Failed to insert documents!'))
            });
        } else {
            console.error('File ' + dir.name + ' already Processed');
        }
    });
    res.json({Message: "Directory Logs Processed"});
};

module.exports = { list, sync }