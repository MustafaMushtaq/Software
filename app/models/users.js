'use strict';

var mongoose = require('mongoose');
var mongoose_delete = require('mongoose-delete');
var isEmail = require('validator/lib/isEmail');

var UsersModel = function() {

  var usersSchema = mongoose.Schema({
    fullName: { type: String, default: '' },
    email: { type: String, unique: [true, 'Email address already exists'], validate: [isEmail, 'Please enter a valid email address'] },
    password: { type: String },
    role: { type: String },
    phoneNumber:{type: String},
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  }, {collection: 'Users'});

  usersSchema.statics.getUser = function(userId) {
    return this.findOne({_id: userId}).then(function(user) {
      return user;
    });
  };

  usersSchema.plugin(mongoose_delete);
  
  return mongoose.model('Users', usersSchema);
  
};

module.exports = new UsersModel();
