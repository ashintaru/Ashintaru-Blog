const express = require('express');
const morgan = require('morgan')
// views 

// express app

const app = express();
//port
app.set('view engine', 'ejs');

app.listen(3000);
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

