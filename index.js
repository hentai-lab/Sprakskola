var Express = require('express');
var app = Express();
var port = process.env.PORT || 3000

app.use(Express.static(__dirname + '/public'));
app.get('/game', function (req, res){
    res.send('Game');
});
app.get('/chat', function (req, res){
    res.send('Chat');
});

app.listen(port, function() {
    console.log("App iniciada: http://localhost:" + port);
});