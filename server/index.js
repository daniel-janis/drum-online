const express = require('express');
const cors = require('cors');
const sequel = require('./database/sequel');
// const usersModel = require('./models/users')

const app = express();

app.use(cors());
app.use(express.json());


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



app.listen(3001, () => console.log('Up and Running on 3001'));