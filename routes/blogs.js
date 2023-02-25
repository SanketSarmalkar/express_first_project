const express = require('express')

const router = express.Router();
const path = require('path');
const blogs = require('../data/blogs.js');

router.get('/',(req,res)=>{
    //res.sendFile(path.join(__dirname,'../views/index.html'));
    res.render('home');
});

router.get('/blog',(req,res)=>{
    // blogs.forEach(element => {
    //    console.log(element.title); 
    // });
    //res.sendFile(path.join(__dirname,'../views/bloghome.html'));
    res.render('bloghome',{
        blogs: blogs
    });
});

router.get('/blogpost/:slug',(req,res)=>{
    myblog = blogs.filter((e)=>{
        return e.slug == req.params.slug;
    });
    console.log(myblog);
    //res.sendFile(path.join(__dirname,'../views/blogpage.html'));
    res.render('blogpage',{
        title: myblog[0].title,
        content: myblog[0].content,
    });
});

module.exports = router;