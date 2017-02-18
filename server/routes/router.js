import productController from '../db/product/productController.js';

const passport = require('passport');
import {renderToString} from 'react-dom/server';

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	// app.post('/auth/login', 
	// passport.authenticate('local', {	successRedirect: 'welcome',
	// 																	failureRedirect: '/',
	// 																	failureFlash: false }
	// ));

	app.get('/auth/facebook', 
		passport.authenticate('facebook')
	);

	app.get('/auth/facebook/callback', 
		passport.authenticate('facebook', {
			successRedirect: '/broadcastroom',
			failureRedirect: '/'
		})
	);

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	});

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



