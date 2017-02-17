import productController from '../db/product/productController.js';

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get('/hello', (req, res) => {
  	return res.send('Can you hear me?');
	});

	app.get('/read/:id', (req, res) => {
		res.send('You are reading post ' + req.params.id);
	});

	app.get('/searchProduct', productController.searchProduct );
	app.post('/removeProduct', productController.removeProduct );
	app.post('/insertProduct', productController.insertProduct );

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
	  res.sendfile('./public/index.html');
	});

};



