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

app.post('/message', function(req, res) {
    var AssistantV1 = require('ibm-watson/assistant/v1');
    
    const watson_api_key = 'RvHtP5bqBKk_EJekpmhxwC3ErPh3MFpssNEqrxv08zJw';
    const watson_assistant_id = '748bda65-ebe4-472e-95b0-786cfc990342';
    const watson_workspace_id = 'e91562c9-4b92-446a-8b0e-d09f2eceb50c';

    var inputMessage = document.getElementById('message').value;

    var assistant = new AssistantV1 ({
        iam_apikey: watson_api_key,
        url: 'https://gateway.watsonplatform.net/assistant/api/',
        version: '2018-09-19'
    });

    assistant.message ({
        input: { text: inputMessage },
        assistant_id: watson_assistant_id,
        workspace_id: watson_workspace_id
    }).then(result => {
        console.log(JSON.stringify(result, null, 2));
    }).catch(err => {
        console.log(err);
    });
});

app.listen(port, function() {
    console.log('App iniciada: http://localhost:' + port);
});