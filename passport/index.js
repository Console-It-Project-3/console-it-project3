const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const User = require('../models/user')

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((email, done) => {
    console.log('*** serializeUser called, user: ')
    console.log(email) // the whole raw user object!
    console.log('---------')
    done(null, { _id: email._id })
})

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
    console.log('DeserializeUser called')
    User.findOne(
        { _id: id },
        'email',
        (err, email) => {
            console.log('*** Deserialize email, email:')
            console.log(email)
            console.log('--------------')
            done(null, email)
        }
    )
})

//  Use Strategies 
passport.use(LocalStrategy)

module.exports = passport