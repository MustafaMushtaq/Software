var Users = require('../../../../models/users.js');
const {commonFunctions ,db ,validation} = global;
module.exports = function (router) {

  router.post('/create-user', asyncMiddleware(validation.signUp),asyncMiddleware(async(req, res, next)=>{

    req.body.password = commonFunctions.getHashedPassword(req.body.password);
    req.body.role = 'user';

    let user = await db.Users.create(req.body)

    if(!user){
      throw "SignUp process not completed"
    }
    res.http200({
      message: "Account created successFully",
      user
    })
  }))

  router.post('/sign-in',asyncMiddleware(async(req, res, next)=>{
    let user = await db.Users.findOne({
      email: req.body.email,
      password: commonFunctions.getHashedPassword(req.body.password),
      deleted: false
    })
    if(!user){
      throw "Invalid Credentials"
    }
    let updateUser = await db.Users.findByIdAndUpdate(user._id, {isActive: true})

    let token = commonFunctions.createToken({
      _id: user._id,
      email: user.email,
      password: user.password,
      model: 'Users'
    });

    res.http200({
      message: "Login SuccessFully",
      token: token,
      user: updateUser
    })
  }))

  
  router.get('/me', asyncMiddleware(async(req, res, next) => {
    let user = await db.Users.findOne({
      _id: req.user._id
    });
    res.http200({ user: user });
  }))
};
