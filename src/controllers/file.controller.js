'use strict'

const dirSchema = require('../models/file.schema');
const config = require('../../config/index');
const path = require('path');
const fs = require('fs');

const list = async (req, res) => {
    const listDirLogFiles = await dirSchema.find();
    console.log(listDirLogFiles);
    res.json({Message: "Directory Logs Listed"});
};

const add = async (req, res) => {
    fs.readdir(config.pmta_filelogs, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        files.forEach(async function (file) {
            dirSchema.collection.find({name: file}).toArray(function (err, doc) {
                if (!doc) {
                    console.log('File ' + file + ' already saved');
                } else {
                    const newDirSchema = new dirSchema();
                    newDirSchema.save();
                    console.log('File ' + file + ' saved');
                }
            })
        });
    });
    res.json({Message: "Directories logs processed"});
};

module.exports = { list, add }