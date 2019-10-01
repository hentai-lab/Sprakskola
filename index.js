var Express = require('express');
var app = Express();
var port = process.env.PORT || 3000;

app.use(Express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/index', function(req, res) {
    res.render('index.html');
});
app.get('/game', function(req, res) {
    var imgId = Math.floor(Math.random() * 7);
    res.render('game.html', {'image': '/styles/images/' + imgId + '.png'});
});
app.get('/chat', function(req, res) {
    res.render('chat.html');
});

app.listen(port, function() {
    console.log('App iniciada: http://localhost:' + port);
});