const mongoose = require("mongoose")

const chatSchema = mongoose.Schema({
    "username" : {
        type : String,
        require : true
    },
    "password" : {
        type : String,
        require : true
    }
});

const User = new mongoose.model("User",chatSchema);

module.exports = User;