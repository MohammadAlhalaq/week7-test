const dbconnection = require('../config/connection');
exports.getCities = () => dbconnection.query('SELECT * FROM citys ;');