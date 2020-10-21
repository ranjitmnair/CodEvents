const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const {db} = require ('../database');
const session=require('express-session');

exports.create=(req,res)=>{
    const {organiser_id,event_type,name,venue,date,time,sponsors}=req.body;
    if(!organiser_id || !event_type || !name || !venue || !date || !time){
          return res.render('organiserdashboard',{
            message:'Enter all the required details to create your event*'
        })
    }
    db.query('INSERT into '+event_type+' SET ?',{organiser_id:organiser_id,name:name,venue:venue,date:date,sponsors:sponsors,time:time},
    (error,results)=>{
        if(error)console.log(error)
        else{
            db.query('INSERT into `organiser-created-events` SET ?',{organiser_id:organiser_id,name:name,venue:venue,date:date,time:time},
            (error,results)=>{
                if(error)console.log(error);                
                return res.render('organiserdashboard',{
                    message: 'Event created successfully'
                })
            })
          
        }
    }    
    )
}

exports.getcreatedevents=(req,res)=>{
    const organiser_id=req.body.organiser_id_1;
    db.query('SELECT * from `organiser-created-events` where organiser_id= ?',[organiser_id],(error,results)=>{
        if(error)console.log(error)
        console.log(results);
    })
}