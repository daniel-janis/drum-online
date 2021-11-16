const express = require('express');
const cors = require('cors');
const sequel = require('./database/sequel');
const { sequelize } = require('./models/users');
const users = require('./models/users');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();
const secret = process.env.TOKEN_SECRET;

const bcrypt = require('bcryptjs');

const app = express();

app.use(cors());
app.use(express.json());

function createToken(email, username) {
    return jwt.sign({ email, username }, secret, { expiresIn: 1800 });
}


app.get('/api/getArticles', async (req, res) => {
    var allArticles = await sequel.query('SELECT * FROM articles')
    res.json(allArticles[0])
})

app.get('/api/getVideos', async (req, res) => {
    var allVideos = await sequel.query('SELECT * FROM videos')
    res.json(allVideos[0])
})

app.get('/api/getUsers', async (req, res) => {
    var allUsers = await sequel.query('SELECT * FROM users')
    res.json(allUsers[0])
})

app.get('/api/getFeaturedArticle', async (req, res) => {
    var featuredArticle = await sequel.query('SELECT * FROM articles WHERE id = 6')
    res.json(featuredArticle[0])
})

app.get('/api/getFeaturedVideo', async (req, res) => {
    var featuredVideo = await sequel.query('SELECT * FROM videos WHERE id = 34')
    res.json(featuredVideo[0])
})

app.post("/api/register", async (req, res) => {
  const { firstName, lastName, userName, eMail, passWord } = req.body;

  var hash = await bcrypt.hash(passWord, 10);

  var numEmail = await users.findAndCountAll({ 
    where: { email: eMail } });
  var numUsername = await users.findAndCountAll({
    where: { username: userName } });

  if (numEmail.count > 0 && numUsername.count > 0) {
    res.status(200).send("Please choose a different Email and Username");
  } else if (numUsername.count > 0) {
    res.status(200).send("Please choose a different username");
  } else if (numEmail.count > 0) {
    res.status(200).send("Please choose a different email");
  } else {
    const userData = users
      .create({
        username: userName,
        email: eMail,
        password: hash,
        first_name: firstName,
        last_name: lastName
      })
      .then(() => {
        res.status(200).send("Success");
      });
  }
});

app.post('/api/login', async (req, res) => {
    const { userName, passWord } = req.body;
    const user = await users.findAndCountAll({where:{username:userName}})
    if (user.count !== 1) {
        res.status(200).send('User Not Found')
    } else {
        var compare = await bcrypt.compare(passWord, user.rows[0].dataValues.password);
        if (!compare) {
            res.status(200).send('Login Failed')
        } else {
            res.status(200).send({
                user:user.rows[0].dataValues,
                token: createToken(user.rows[0].dataValues.email, user.rows[0].dataValues.username)
            })
        }
    }
})

app.post('/api/AuthenticateUser', async (req, res) => {
    /*
    -get token from response 
    -decode the token
    -get user from database based on decoded token
    -if there is a user, create new token, send back user and new token
    -if NO user, send back auth failed message (doesn't matter what because the function will catch it)
    */

    const { token } = req.body
    try{
        var decodedToken = jwt.verify(token, secret)
        if (decodedToken.username) {
            const user = await users.findAndCountAll({where:{username:decodedToken.username}})
            if (user.count !== 1) {
                res.status(200).send("Authentication Failed")
            } else {
                res.send({
                    user:user.rows[0].dataValues,
                    token: createToken(user.rows[0].dataValues.email, user.rows[0].dataValues.username)
                })
            }
        } else {
            res.status(200).send("Authentication Failed")
        }
    }catch(err){
        console.log(err)
        res.status(200).send("Invalid JWT")
    }
})


app.listen(3001, () => console.log('Up and Running on 3001'));