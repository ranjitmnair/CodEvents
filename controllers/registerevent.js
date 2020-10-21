const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const {db} = require ('../database');
const session=require('express-session');

exports.showallhackathons=(req,res)=>{
    var html="";
    db.query('SELECT * from hackathons',[],(error,results)=>{
        if(error)console.log(error);
        res.render('hackathons',{
            results:results            
        });
    })
}

exports.showallcodingcontests=(req,res)=>{
    var html="";
    db.query('SELECT * from codingcontests',[],(error,results)=>{
        if(error)console.log(error);
        res.render('codingcontests',{
            results:results            
        });
    })
}

exports.showallwebinars=(req,res)=>{
    db.query('SELECT * from webinars',[],(error,results)=>{
        if(error)console.log(error);
        res.render('webinars',{
            results:results            
        });
    })
}

exports.registerforhackathon=(req,res)=>{
    const {user_id,hackathon_id}=req.body;
    db.query('SELECT DATE,TIME,NAME,VENUE from hackathons where id=?',[hackathon_id],(error,results)=>{
        if(error)console.log(error);
        const hackathons=results;
        db.query('INSERT into `user-registered-events` SET ?',{user_id:user_id,hackathon_id:hackathon_id,eventname:hackathons[0].NAME,DATE:hackathons[0].DATE,TIME:hackathons[0].TIME,Venue:hackathons[0].VENUE},
        (error,results)=>{
            if(error)console.log(error)
            return res.status(200).render('hackathons',{
                message:'Hackathon registered successfully!'
            })
        }
        )
    })
}
exports.registerforcodingcontests=(req,res)=>{
    const {user_id,codingcontest_id}=req.body;
    db.query('SELECT DATE,TIME,NAME,VENUE from codingcontests where id=?',[codingcontest_id],(error,results)=>{
        if(error)console.log(error);
        const codingcontests=results;
        db.query('INSERT into `user-registered-events` SET ?',{user_id:user_id,codingcontest_id:codingcontest_id,eventname:codingcontests[0].NAME,DATE:codingcontests[0].DATE,TIME:codingcontests[0].TIME,Venue:codingcontests[0].VENUE},
        (error,results)=>{
            if(error)console.log(error)
            return res.status(200).render('codingcontests',{
                message:'Coding Contest registered successfully!'
            })
        }
        )
    })
}

exports.registerforwebinars=(req,res)=>{
    const {user_id,webinar_id}=req.body;
    db.query('SELECT DATE,TIME,NAME,VENUE from webinars where id=?',[webinar_id],(error,results)=>{
        if(error)console.log(error);
        const webinars=results;
        db.query('INSERT into `user-registered-events` SET ?',{user_id:user_id,webinar_id:webinar_id,eventname:webinars[0].NAME,DATE:webinars[0].DATE,TIME:webinars[0].TIME,Venue:webinars[0].VENUE},
        (error,results)=>{
            if(error)console.log(error)
            return res.status(200).render('webinars',{
                message:'Registered for Webinar successfully!'
            })
        }
        )
    })
}