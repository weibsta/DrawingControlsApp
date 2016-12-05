var mongoose = require('mongoose');

//define model for storing drawings
module.exports = mongoose.model('Drawings', {
   name : { type : String, default: ''}
});