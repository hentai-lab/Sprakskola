const express = require('express');
const gameJS = require('./public/js/game.js');

const app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const port = process.env.PORT || 3000;

var userAnswer = '';

app.get('/index', (req, res) => {
    res.render('index.html');
});

app.get('/game', (req, res) => {
    var imgId = Math.floor(Math.random() * 7);
    res.render('game.html', {'image': '/styles/images/' + imgId + '.png', 'answer': 'Retorno da resposta', 'help': 'Retorno da ajuda'});
});

app.get('/play', (req, res) => {
    userAnswer = req.query.userAnswer;
    var imgId = req.query.imgId;
    gameJS.game('./public' + imgId, userAnswer, imgId, res, '0');
});

app.get('/help', (req, res) => {
    var imgId = req.query.imgId;
    gameJS.game('./public' + imgId, userAnswer, imgId, res, '1');
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