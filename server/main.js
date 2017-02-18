import express from 'express';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const React = require('react');
const Router = require('react-router');


const app = express();
const port = 3000;
const devPort = 3001;

//console.log('!!!!!start!!!!!');
if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
    
    const config = require('../webpack.dev.config');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}

app.use('/', express.static(__dirname + '/../public'));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done){
	console.log('serializeUser', user);
	done(null, user.authId)
});


var users = [];

passport.deserializeUser(function(id, done){
	console.log('deserializeUser1', id);
	for(let i = 0; i < users.length; i++){
		let user = users[i];
		if(user.authId === id){
			done(null, user)
		}
	}
});

passport.use(new FacebookStrategy({
	clientID: '1846923295564989',
	clientSecret: '94d739c275e6bd8254d0a2fac8e379f8',
	callbackURL: '/auth/facebook/callback'
}, function(accessToken, refreshToken, profile, done){
	console.log(profile);
	var authId = 'facebook:' + profile.id;

	for(let i = 0; i < users.length; i++){
		var user = users[i];
		if(user.authId === authId){
			return done(null, user)
		}
	}

	let newuser = {
		'authId' : authId,
		'displayName' : profile.displayName
	};

	users.push(newuser)
	done(null, newuser)
}));


app.get('/auth/facebook', 
	passport.authenticate('facebook')
);

app.get('/auth/facebook/callback', 
	passport.authenticate('facebook', {
		successRedirect: '/welcome',
		failureRedirect: '/'
	})
);

app.get('/logout', function(req, res){
	req.logout();
	res.redirect('/');
})


// routes ==================================================
require('./routes/router.js')(app); // pass our application into our routes

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});
