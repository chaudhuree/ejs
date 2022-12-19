const express=require('express')
const ejs=require('ejs')

const app = express()
// to use css and other files
app.use(express.static("public"))
// to get form data
app.use(express.urlencoded({ extended:true}))
// for ejs engine
app.set('view engine', 'ejs')

// constants
let tasks=['eating','sleeping','walking','swimming']

// home route
app.get('/', (req, res) => {
  res.render('index',{pageTitle:"Home Page",tasks:tasks});
})
app.post('/', (req, res) => {
  const {fname}=req.body
  tasks.push(fname)
  res.redirect("/");
})

// contact route
app.get('/contact', (req, res) => {
  res.render('contact',{pageTitle:"Contact Page",someText:"chaudhuree"});
})



// server listen
app.listen(5000,()=> console.log("app is running") )