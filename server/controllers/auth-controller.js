var jwt = require('jsonwebtoken');
require('dotenv').config();

var authUser = function(req, res, next) {
  var token = req.headers.token;
  jwt.verify(token, process.env.KEY_SCRT, (err, decoded) => {
    if(decoded) {
      req['dataUser'] = decoded;
      // console.log(req);
      next()
    } else {
      res.send(err)
    }
  })
}

module.exports = {
  authUser
};
