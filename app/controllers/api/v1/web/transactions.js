var Users = require('../../../../models/users.js');
const {commonFunctions ,db ,validation} = global;
module.exports = function (router) {

  router.post('/create-transaction',asyncMiddleware(async(req, res, next)=>{
    if(!req.body){
        throw "Transaction details required"
      }
    let transaction = await db.Transactions.create(req.body)
    console.log("=========>>>>>>>>>>>>",transaction)
    let updateCustomer = await db.Customers.findByIdAndUpdate(transaction.customer,{ $addToSet: { products: transaction.product, transactions: transaction._id } }, { upsert: true })
    let updateProduct = await db.Products.findByIdAndUpdate(transaction.product,{ $addToSet: { customers: transaction.customer, transactions: transaction._id } }, { upsert: true })
    res.http200({
      message: "Transaction created successFully",
      transaction : transaction
    })
  }))
  router.get('/get-transactions', asyncMiddleware(async (req, res, next) => {
    var search = {};
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
    console.log("asdasda======<<<<<<<<<", req.query.search)
    let transactions = await db.Transactions.find(
     search
    ).populate('customer').populate('product')
    res.http200({
      transactions: transactions
    })
  }))
};
