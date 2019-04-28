'use strict';

var mongoose = require('mongoose');
var mongoose_delete = require('mongoose-delete');
var isEmail = require('validator/lib/isEmail');

var TransactionsModel = function() {

  var transactionsSchema = mongoose.Schema({
    fullName: { type: String, default: '' },   
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customers' },
    bill: { type: String },
    comments: { type: String },
    salesPerson: { type: String},
    joiningDate: { type:String },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  }, {collection: 'Transactions'});

  transactionsSchema.plugin(mongoose_delete);
  
  return mongoose.model('Transactions', transactionsSchema);
  
};

module.exports = new TransactionsModel();
