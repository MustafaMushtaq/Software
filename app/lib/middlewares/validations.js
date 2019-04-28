const {
    db,
    commonFunctions
  } = global;

module.exports={
    signUp: async(req, res, next) => {
        
        let user = await db.Users.findOne({ email: req.body.email });
        if (user) {
          throw "Email address already exists"
        }

        let phoneNumber = await db.Users.findOne({ phoneNumber: req.body.phoneNumber });
        if (phoneNumber) {
          throw "Phone Number already exists"
        }
        next();
      },

      logIn: async(req, res, next) => {
        
       
        next();
      },
}