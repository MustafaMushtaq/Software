var jwt = require('jsonwebtoken');
const promise = require('bluebird');
const jwtVerify = promise.promisify(require('jsonwebtoken').verify);
var db = global.db;


module.exports = function() {

    return async function(req, res, next) {

      if (!req.headers.authorization) {
        return res.http401('Authorization header missing');
      } else {
        console.log("in Auth========================")
        try {
          const token = req.headers.authorization.split(' ')[1];
          const decoded = await jwtVerify(token, req.app.kraken.get('app:jwtSecret'));
          if (!decoded) {
            return res.http401('Invalid token');
          }
          console.log('------------------------------------');
          console.log(decoded.model);
          console.log(decoded);
          console.log('------------------------------------');
          const user = await db[decoded.model].findOne({
  
            _id: decoded._id,
            deleted: false
          });
          if (!user) {
            return res.http401('Invalid token');
  
          }
          req.user = user;
          global.user = user;
          next();
        } catch (error) {
          global.log.error(error);
          return res.http401('Invalid token');
        }
      }
    }
    next();
    
  }

