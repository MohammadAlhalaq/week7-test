const { Pool } = require('pg');
require('env2')('./config.env');
let dbURL = '';
if(!process.env.URL_test_CITYS && !process.env.URL_H_CITYS && !process.env.URL_CITYS) throw new Error('NO DATABASE URL!!!');
if(process.env.NODE_ENV === 'test') dbURL = process.env.URL_test_CITYS;
else if(process.env.NODE_ENV === 'development') dbURL = process.env.URL_CITYS; 
else dbURL = process.env.CITYS_H_URL;


module.exports = new Pool({
    connectionString: dbURL,
    ssl: true
});