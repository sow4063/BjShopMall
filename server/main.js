import express from 'express';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

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

// routes ==================================================
require('./routes/router.js')(app); // pass our application into our routes

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});
