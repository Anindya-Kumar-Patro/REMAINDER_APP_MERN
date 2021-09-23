const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const todoRoute = require('./routes/TodoRoute');

dotenv.config()
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(console.log("Connectted to MONGODB"))
.catch(err=>{
    console.log(err);
})

app.use('/tasks', todoRoute);

app.listen('5000',()=>{
    console.log("listening on");
});