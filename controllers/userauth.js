const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const {db} = require ('../database');
const session=require('express-session');

exports.register = (req, res) => {
  const {id, password, fname, lname} = req.body;

  db.query (
    'SELECT id from users where id = ?',
    [id],
    async (error, results) => {
      if (error) res.status (400).send (error);
      if (results.length > 0) {
        return res.render ('userregister', {
          message: 'This user id has already been taken, choose another one',
        });
      }

      let hashedPassword = await bcrypt.hash (password, 8);

      db.query (
        'INSERT into users SET ?',
        {id: id, password: hashedPassword, fname: fname, lname: lname},
        (error, results) => {
          if (error) console.log (error);
          else {
            return res.render ('userregister', {
              message: 'User registered successfully',
            });
          }
        }
      );
    }
  );
};

exports.login = async (req, res) => {
  try {
    const {id, password} = req.body;
    if (!id || !password) {
       return res.render ('userlogin',{        
        message: "User id or password not entered."
      });
    }
    db.query (
      'SELECT password from users where id= ?',
      [id],
      async (error, results) => {
        if (results.length < 1 || !(await bcrypt.compare(password,results[0].password))) {
          return res.render('userlogin', {
            message: 'Enter valid id or password',
          });
        } 
        res.status(200).send("<h1> Signed in</h1>");
      }


    );
  } catch (error) {
      res.send(error);
  }
};
