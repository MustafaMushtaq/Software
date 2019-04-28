var Users = require('../../../../models/users.js');
const {
  commonFunctions,
  db,
  validation
} = global;
module.exports = function (router) {

  router.post('/create-product', asyncMiddleware(async (req, res, next) => {
    if (!req.body) {
      throw "product details required"
    }
    let product = await db.Products.create(req.body)
    res.http200({
      message: "Product created successFully",
      product: product
    })
  }))

  router.get('/get-products', asyncMiddleware(async (req, res, next) => {
    var search = {};
    if (req.query.search) {
      search = {
        deleted: false,
        $or: [{
          name: {
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
    console.log("asdasda======<<<<<<<<<", search)
    let products = await db.Products.find(
     search
    ).populate('customers')
    res.http200({
      products: products
    })
  }))
};
