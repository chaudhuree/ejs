const express=require('express')
const ejs=require('ejs')

const app = express()

app.use(express.static("public"))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index',{pageTitle:"Home Page"});
})
app.get('/contact', (req, res) => {
  res.render('contact',{pageTitle:"Contact Page",someText:"chaudhuree"});
})




app.listen(5000,()=> console.log("app is running") )