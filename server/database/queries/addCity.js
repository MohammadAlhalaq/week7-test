const dbconnection = require('../config/connection');

exports.addCity = (data) => {
    const { name, city } = data;
    return dbconnection
      .query({
          text: 'INSERT INTO CITYS (name, city) values ($1, $2);',
          values: [name, city]
    });
}