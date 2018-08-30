import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../api/user';

const router = express.Router();

router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash
    });
    user.save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
});

router.post("/login", (req, res, next) => {
  let fetchedUser;
  User.findOne( {email: req.body.email} )
    .then(user => {
      // if user was not found... do this
      if (!user) {
        console.log(user);
        return res.status(401).json({
          message: 'Authentication Failed, please try again'
        });
      }
      // if user was found... compare request pw with db pw
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password)
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: 'Authentication Failed'
        });
      }
      const token = jwt.sign({ email: fetchedUser.email, userId: fetchedUser._id},
        'this_is_the_secret_son',
        { expiresIn: "1h"}
        );
      // console.log(token);
      // successfully authenticated
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        message: 'You have been successfully logged in!'
      });
    })
    .catch( err => {
      console.log(err);
      return res.status(401).json({
        message: 'Authentication Failed'
      });
    });
});


module.exports = router;