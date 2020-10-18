const mysql=require('mysql');

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbms'
})

db.connect((error)=>{
    if(error)console.log(error);
    else console.log("database connected");

})

module.exports={db};