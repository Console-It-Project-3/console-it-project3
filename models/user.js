const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt= require("bcryptjs");

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema({
    username: {
        type: String, 
        unique: true,
        required: 'Username is required' 
    },
    email: { 
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] 
    },
    password: {
        type: String, 
        required: 'Password is required' 
    },
    firstname: {
        type: String, 
        required: 'First name is required' 
    },
    lastname: { 
        type: String, 
        required: 'Last name is required' 
    },
    // age: { 
    //     type: Number, 
    //     min: [13, 'You must be 13-years-old or older to play'], 
    //     required: true 
    // }, // verify user is older than 13
    // phoneNum: { 
    //     type: Number, 
    //     required: 'Phone number is required' 
    // },
    characters: [{
        type: Schema.Types.ObjectId, 
        ref: 'Character'
    }],
    highscore: { 
        type: Number
    },
    // terms: { 
    //     type: Boolean, 
    //     required: 'You must agree with our terms of service to play' 
    // },
    notifcations: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Character' 
    }], //association to another model
    activeStatus: { 
        type: Boolean, 
        // required: true 
    },
    blocked: { 
        type: Boolean, 
        required: false 
    },
});

// Define schema methods
userSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
    if (!this.password) {
        console.log('models/user.js =======NO PASSWORD PROVIDED=======')
        next()
    } else {
        console.log('models/user.js hashPassword in pre save');

        this.password = this.hashPassword(this.password)
        next()
    }
})
  
const User = mongoose.model("User", userSchema);


module.exports = User;