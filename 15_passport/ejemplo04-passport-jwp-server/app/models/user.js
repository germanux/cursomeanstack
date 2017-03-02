var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* Incompatibilidad con esta version de node!*/
//var bcrypt = require('bcrypt');
 
// Thanks to http://blog.matoski.com/articles/jwt-express-node-mongoose/
 
// set up a mongoose model
var UserSchema = new Schema({
  name: {
        type: String,
        unique: true,
        required: true
    },
  password: {
        type: String,
        required: true
    }
});
 
UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        next();
        /*bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });*/
    } else {
        return next();
    }
});
 
UserSchema.methods.comparePassword = function (passw, cb) {
    if(passw == this.password){
        cb(null, true);
    }else{
        cb({},false);
    }
    /*bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });*/
};
 
module.exports = mongoose.model('User', UserSchema);