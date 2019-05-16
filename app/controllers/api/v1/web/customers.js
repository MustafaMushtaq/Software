var Users = require('../../../../models/users.js');
const {commonFunctions ,db ,validation} = global;
module.exports = function (router) {

  router.post('/create-customer',asyncMiddleware(async(req, res, next)=>{
    if(!req.body){
        throw "Customer details required"
      }
    let customer = await db.Customers.create(req.body)
    res.http200({
      message: "Customer created successFully",
      customer : customer
    })
  }))

  router.delete('/delete-customer/:customerId', asyncMiddleware(async (req, res, next) => {
    let stream = await db.Customers.deleteOne({
      _id: req.params.customerId
    })
    res.http200({
      message: "Customer deleted successfully"
    })
  }))
  
  router.get('/get-single-customer/:customerId', asyncMiddleware(async (req, res, next) => {
    let customer = await db.Customers.findOne({
      _id: req.params.customerId
    }).populate('products')
    res.http200({
      customer: customer,
    })
  }))
  router.get('/get-customers', asyncMiddleware(async (req, res, next) => {
  
    let customers = await db.Customers.find({deleted:false})

    var search = {}
    if (req.query.search) {
      search = {
        deleted: false,
        $or: [{
          joiningDate: {
            $regex: req.query.search,
            $options: 'i'
          },
        }]
      }
    }
    else{
      search = {
        deleted: false
      }
    }
    res.http200({
      customers: customers
    })
  }))
};
