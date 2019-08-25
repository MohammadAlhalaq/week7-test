const { addCity } = require('../database/queries/addCity');
exports.addCity = (req, res) => {
    addCity(req.body)
      .then(res.redirect('/'))
      .catch(err => res.send(err))
}