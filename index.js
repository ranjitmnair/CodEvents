const express=require('express');
const app=express();
const path=require('path');
const {db}=require('./database');
// const cookieParser=require('cookie-parser');





app.get('/',(req,res)=>{
    res.send('<h1>CodEvents</h1>');
})

app.set('view engine','hbs');


const publicDirectory=path.join(__dirname,'./public');
app.use(express.static(publicDirectory));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// app.use(cookieParser);


//defining all routes

app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));



app.listen('3000',()=>{
    console.log("Server Started");
})