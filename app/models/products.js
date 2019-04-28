'use strict';

var mongoose = require('mongoose');
var mongoose_delete = require('mongoose-delete');
var isEmail = require('validator/lib/isEmail');

var ProductsModel = function() {

  var productsSchema = mongoose.Schema({
    name: { type: String, default: '' },
    price: { type: String },
    comments: { type: String },
    customers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Customers', default: [] }],
    transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transactions', default: [] }],
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  }, {collection: 'Products'});


  productsSchema.plugin(mongoose_delete);
  
  return mongoose.model('Products', productsSchema);
  
};

module.exports = new ProductsModel();
