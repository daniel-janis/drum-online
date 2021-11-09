const express = require('express');
const cors = require('cors');
const sequel = require('./database/sequel');
const usersModel = require('./models/users')

const app = express();

app.use(cors());
app.use(express.json());


app.get('/api/getArticles', async (req, res) => {
    var test = await sequel.query('SELECT * FROM articles')
    console.log(test[0])
    res.json(test[0])
})

app.get('/api/getVideos', async (req, res) => {
    var test = await sequel.query('SELECT * FROM videos')
    console.log(test[0])
    res.json(test[0])
})

app.get('/api/getUsers', async (req, res) => {
    var test = await sequel.query('SELECT * FROM users')
    console.log(test[0])
    res.json(test[0])
})

app.listen(3001, () => console.log('Up and Running on 3001'));