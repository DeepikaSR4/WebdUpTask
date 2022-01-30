const express=require('express')
const exphbs = require('express-handlebars')
const app=express();




app.engine('hbs', exphbs.engine({extname:'hbs'}));
app.set('view engine', 'hbs');



app.get('/',(req,res) => {
        res.render('signup')
})
app.get('/signup',(req,res) => {
    res.render('signup')
})
app.get('/login',(req,res) => {
    res.render('login')
})
app.get('/welcome',(req,res) => {
    res.render('welcome')
})




app.listen(5000,()=> console.log("Server Started"))
