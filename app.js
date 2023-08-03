const express = require('express');

// views 

// express app

const app = express();
//port
app.set('view engine', 'ejs');

app.listen(3000);


// param (route identifers, callback)
app.get('/',(req,res)=>{
    // res.sendFile('./view/index.html',{root:__dirname})
    res.render('index',{title:"Home"});
})
app.get('/about',(req,res)=>{
    // res.sendFile('./view/index.html',{root:__dirname})
    res.render('about',{title:"About"});
})
app.use((req,res)=>{
    res.status(404).render('404',{title:"404"});
})

