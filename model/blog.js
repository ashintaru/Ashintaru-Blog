const mongoose = require('mongoose');
const scheme = mongoose.Schema;

const blogSchme = new scheme({
    title:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    blog:{
        type:String,
        required:true
    }
},{timestamps:true});


const Blog = mongoose.model('Blog',blogSchme);
module.exports = Blog;