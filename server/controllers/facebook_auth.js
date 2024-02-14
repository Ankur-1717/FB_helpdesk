const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const express = require('express');
const User = require('../models/user.model');

const router = express.Router();
require('dotenv').config();

passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_SECRET_ID,
            callbackURL: process.env.FACEBOOK_CALLBACK_URL,
        },
        async function (accessToken, refreshToken, profile, cb) {
            const user = await User.findOne({
                accountId: profile.id,
                provider: 'facebook',
            });
            if(!user) {
                const user = new User({
                    accountId: profile.id,
                    name: profile.displayName,
                    provider: profile.provider,
                });
                await user.save();
                return cb(null, profile);
            } else {
                return cb(null, profile);
            }
        }
    )
);

router.get('/', passport.authenticate('facebook', {scope: 'email'}));

router.get(
    '/callback',
    passport.authenticate('facebook', {
        failureRedirect: '',
    }),
    function (req,res) {
        res.redirect('');
    }
);

router.get('/success', async (req,res) => {
    const userInfo = {
        id: req.session.passport.user.id,
        displayName: req.session.passport.user.displayName,
        provider: req.session.passport.user.provider,
    };
    res.render('', {user:userInfo});
});

router.get('/error', (req,res) => res.send('Error logging via Facebook!'));

router.get('/signout', (req,res) => {
    try {
        req.session.destroy(function(err){});
        res.render('auth');
    } catch (err) {
        res.status(400).send({message: 'Failure to sign out fb user'});
    }
});

module.exports = router;