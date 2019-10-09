const AssistantV2 = require('ibm-watson/assistant/v2');
const express = require('express');
const visual_recognition = require('./public/js/game.js');

const app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const port = process.env.PORT || 3000;

app.get('/index', (req, res) => {
    res.render('index.html');
});

app.get('/game', (req, res) => {
    var imgId = Math.floor(Math.random() * 7);
    res.render('game.html', {'image': '/styles/images/' + imgId + '.png'});
});

app.get('/play', (req, res) => {
    var userAnswer = req.query.userAnswer;
    var answer = req.query.answer;
    var imgId = req.query.imgId;
    visual_recognition.visualRecognition('./public' + imgId, userAnswer);
});

app.get('/chat', (req, res) => {
    res.render('chat.html');
});

app.get('/chat-2', (req, res) => {
    res.render('chat-2.html');
});

app.get('/message', (req, res) => {
    res.render('chat-2.html');
    var userAnswer = req.query.userAnswer;
    var answer = req.query.answer;
    console.log(userAnswer);
});

app.listen(port, () => {
    console.log('App iniciada: http://localhost:' + port);
});