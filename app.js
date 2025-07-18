const express = require("express");
const mongoose = require("mongoose")
const Blog = require ('./models/blog');
const {connect_uri} = require('./auth')
const app = express();
app.set("view engine", "ejs");

mongoose.connect(connect_uri)
// .then((result) => console.log("connected to db"))
.then((result) => app.listen(3000))
.catch((err) => console.log(err))
// app.set('views', 'views')

app.listen(3000)
//mongoose and mongo sandbox routes
// app.get('/add-blog',(req,res) =>{
//   const blog = new Blog({
//     title: 'New Blog 3',
//     snippet: 'About my blog',
//     body: 'More about this blog'
//   });

//   blog.save()
//   .then((result) => {
//     res.send(result)
//   })
//   .catch((err) =>{
//     console.log(err)
//   })
// })

// app.get('/all-blogs', (req, res) =>{
//   Blog.find()
//   .then((result) =>{
//     res.send(result)
//   })
//   .catch((err) =>{
//     console.log(err)
//   })
// })

// app.get('/single-blog', (req,res) => {
//   Blog.findById("68703a0ff1b45e5d6726ac0e")
//   .then((result) =>{
//     res.send(result)
//   })
//   .catch((err)  =>{
//     console.log(err);
//   })
// })

app.get("/", (req, res) => {
      const blogs = [
    {
      title: "Abang fried eggs",
      snippet: "Lorem, ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds Stars",
      snippet: "Lorem, ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat the undefeatable",
      snippet: "Lorem, ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home" , blogs});
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About"});
});
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//Blog Routes 
app.get('/blogs', (req, res) =>{

})
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "Page not Found " });
});
