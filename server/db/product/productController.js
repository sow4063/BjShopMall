var fs = require('fs');
var path = require('path');
var Q = require('q');
var product = require('./productModel.js');

// Promisify a few mongoose methods with the `q` promise library
var findProducts = Q.nbind( product.find, product );
var createProduct = Q.nbind( product.create, product );
var removeProduct = Q.nbind( product.remove, product );

module.exports = {

	searchProduct: function(req, res, next){

    console.log('searchProducts = ', req.query.productName );

		findProducts( {productName: req.query.productName} )
      .then(function(products) {
      	if( products.length ) {
      		console.log('products exists!!! ::: ', products.length );
          res.send( products );
        } 
        else {
          res.json( [] );
        }
      	
      })
      .fail(function (error) {
      	res.json( error );
      });
	},

  removeProduct: function(req, res, next){

  	console.log('removeProduct = ', req.body.productName );

    removeProduct({productName: req.body.productName})
      .then(function(result){
        res.json( result );
      })
      .fail(function(err){
        res.json( error );
      });
  },

	insertProduct: function (req, res, next) {

		var product = {};

		var imagePath = req.body.imagePath;
    
		product.img.data = fs.readFileSync( imagePath );
		product.img.contentType = path.extname( imagePath );
		product.productName = req.body.productName;
		product.price = req.body.price;

		console.log('insertProduct = ', product );

    createProduct( product )
	    .then(function(result){
	      res.json( result );
	    })
	    .fail(function(err){
	      res.json( error );
	    });
    
  }
};
