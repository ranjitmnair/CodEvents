const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const {db} = require ('../database');

exports.register = (req, res) => {
  const {id, password, fname, lname} = req.body;

  db.query (
    'SELECT id from users where id = ?',
    [id],
    async (error, results) => {
      if (error) res.status (400).send (error);
      if (results.length > 0) {
        return res.render ('register', {
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
            return res.render ('register', {
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
       return res.render ('login',{        
        message: "User id or password not entered."
      });
    }
    db.query (
      'SELECT password from users where id= ?',
      [id],
      async (error, results) => {
        if (results.length < 1 || await bcrypt.compare(password,results[0].password)) {
          return res.render('login', {
            message: 'Enter valid id or password',
          });
        }    
        req.session.Userid=id;        
        // const id=results[0].id;
        // const token=jwt.sign({id:id},'lazytocreateenvprocess',{
        //     expiresIn:'90d',
        // });
        // console.log(token);
        // const cookieOptions={
        //     expires:new Date(
        //         Date.now()+90*24*60*60*100
        //     ),
        //     httpOnly:true
        // }
        // res.cookie('jwt',token,cookieOptions);
        res.status(200).redirect('/');
      }


    );
  } catch (error) {
      res.send(error);
  }
};
