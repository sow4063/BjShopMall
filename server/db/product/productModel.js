// grab the mongoose module
var mongoose = require('../dbConfig.js');

// define our word model
// module.exports allows us to pass this to other files when it is called
var ProductSchema = new mongoose.Schema({
  productName : {
  	type : String, required: true
  },

	price : {
		type : Number, default: 0
	},
	
	image : { data: Buffer, contentType: String },
});

module.exports = mongoose.model('product', ProductSchema);


