const { getCities } = require('../database/queries/getCities');
exports.getCities = (req, res) => getCities()
      .then(citys => res.send(citys.rows))
      .catch(err => res.send(err));