const dbconnection = require('./connection');
const {readFileSync} = require('fs');
const {join} = require('path');
const sql = readFileSync(join(__dirname,'build.sql')).toString();
dbconnection
  .query(sql)
  .then(console.log('done'));