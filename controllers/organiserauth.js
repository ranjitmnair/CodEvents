const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const {db} = require ('../database');
const session=require('express-session');

exports.register = (req, res) => {
  const {id, name, password} = req.body;

  db.query (
    'SELECT id from organisers where id = ?',
    [id],
    async (error, results) => {
      if (error) res.status (400).send (error);
      if (results.length > 0) {
        return res.render ('organiserregister', {
          message: 'This organiser id has already been taken, choose another one',
        });
      }

      let hashedPassword = await bcrypt.hash (password, 8);

      db.query (
        'INSERT into organisers SET ?',
        {id: id, name:name,password: hashedPassword},
        (error, results) => {
          if (error) console.log (error);
          else {
            return res.render ('organiserregister', {
              message: 'Organiser registered successfully',
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
       return res.render ('organiserlogin',{        
        message: "organiserid or password not entered."
      });
    }
    db.query (
      'SELECT password from organisers where id= ?',
      [id],
      async (error, results) => {
              if (results.length < 1 || !(await bcrypt.compare(password,results[0].password))) {
          return res.render('organiserlogin', {
            message: 'Enter valid org-id or password',
          });
        } 
        res.status(200).redirect('../organiserdashboard');
      }


    );
  } catch (error) {
      res.send(error);
  }
};
