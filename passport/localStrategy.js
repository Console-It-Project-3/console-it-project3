const User = require('../models/user')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
    {
        email: 'email' // not necessary, DEFAULT
    },
    function (email, password, done) {
        User.findOne({ email: email }, (err, email) => {
            if (err) {
                return done(err)
            }
            if (!email) {
                return done(null, false, { message: 'No Known email' })
            }
            if (!email.checkPassword(password)) {
                return done(null, false, { message: 'Incorrect password' })
            }
            return done(null, email)
        })
    }
)

module.exports = strategy