const {

  _,
  moment,
  validation,
  commonFunctions
} = global;

var db = require('../app/models/index');


module.exports = function() {


  var admin = {};
  admin.addAdmin = async function() {

    let admin = await db.Users.findOne({ role: 'admin' });
    if (!admin) {
      let createAdmin = await db.Users.create({
        fullName: "super-admin",
        role: "admin",
        email: "admin@erp.system.com",
        phoneNumber:"null",
        password: commonFunctions.getHashedPassword("admin")
      })
    }
  }

  return admin;

}
