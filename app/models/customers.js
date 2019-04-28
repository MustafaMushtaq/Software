'use strict';

var mongoose = require('mongoose');
var mongoose_delete = require('mongoose-delete');
var isEmail = require('validator/lib/isEmail');

var CustomersModel = function() {

  var customersSchema = mongoose.Schema({
    fullName: { type: String, default: '' },
    address: { type: String },
    phoneNumber: { type: String, required: [true, 'Phone Number is required'], unique: [true, 'Phone Number already exists'] },
    email: { type: String, unique: [true, 'Email address already exists'], validate: [isEmail, 'Please enter a valid email address'] },
    password: { type: String },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Products', default: [] }],
    transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transactions', default: [] }],
    role: { type: String },
    gender: { type: String },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  }, {collection: 'Customers'});


  customersSchema.plugin(mongoose_delete);
  
  return mongoose.model('Customers', customersSchema);
  
};

module.exports = new CustomersModel();
