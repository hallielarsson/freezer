
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;

const keys = require('./.config/keys');

const app = express();

app.use(express.json());

app.use(session({ secret: keys.sessionSecret })); // Secure the session

app.use(passport.initialize());

app.use(passport.session());

// Discord Authentication
console.log(keys);
passport.use(new DiscordStrategy({
    clientID: keys.discordClientID,
    clientSecret: keys.discordClientSecret,
    callbackURL: '/auth/discord/callback',

    scope: ['identify']

},

    (accessToken, refreshToken, profile, done) => {

        return done(null, profile);

    }

));

passport.serializeUser((user, done) => {

    done(null, user);

});

passport.deserializeUser((obj, done) => {

    done(null, obj);

});

// Routes

app.use('/auth', require('./routes/auth'));

app.use('/api/fridge', require('./routes/fridge'));

// Start server

app.listen(keys.port, () => {

    console.log(`Server running on port ${keys.port}`);

});