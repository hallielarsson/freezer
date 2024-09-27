const router = require('express').Router();
const passport = require('passport');
router.get('/discord', passport.authenticate('discord'));
router.get('/discord/callback',
    passport.authenticate('discord', { failureRedirect: '/' }),
    (req, res) => {

        // Successful authentication
        res.redirect('/'); // or wherever you want to redirect

    }
);

module.exports = router;