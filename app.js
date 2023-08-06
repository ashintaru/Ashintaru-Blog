const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// views 

// express app
//AgysukQJvN04V1gc
const app = express();
//port
app.set('view engine', 'ejs');

const  dburi = "mongodb+srv://newUser:test123@cluster0.8jgefx8.mongodb.net/sample-db?retryWrites=true&w=majority";

mongoose.connect(dburi,{ useNewUrlParser :true , useUnifiedTopology:true } )
.then( (res )=> app.listen(3000))
.catch( err => console.log("connected failed"));

app.use(morgan('dev'));
app.use(express.static('public'));

// param (route identifers, callback)
app.get('/',(req,res)=>{
    // res.sendFile('./view/index.html',{root:__dirname})
    res.render('index',{title:"Home"});
})
app.get('/about',(req,res)=>{
    // res.sendFile('./view/index.html',{root:__dirname})
    res.status(200).render('about',{title:"About"});
})
app.get('/create-blog',(req,res)=>{
    // res.sendFile('./view/index.html',{root:__dirname})
    res.status(200).render('create-blog',{title:"create"});
})
app.use((req,res)=>{
    res.status(404).render('404',{title:"404"});
})

