const AssistantV2 = require('ibm-watson/assistant/v2');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const watson_api_key = '';
const watson_assistant_id = '';
const watson_workspace_id = '';

const port = process.env.PORT || 3000;

const assistant = new AssistantV2({
    iam_apikey: watson_api_key,
    url: 'https://gateway.watsonplatform.net/assistant/api/',
    version: '2018-09-19'
});

app.get('/index', (req, res) => {
    res.render('index.html');
});

app.get('/game', (req, res) => {
    var imgId = Math.floor(Math.random() * 7);
    res.render('game.html', {'image': '/styles/images/' + imgId + '.png'});
});

app.get('/chat', (req, res) => {
    res.render('chat.html');
    /* var result = req.params.input_field;
    console.log(result);
    res.end(); */
});

app.post('/message', (req, res) => {
    var result = req.body.input_field;
    console.log(result);
    res.end();
});

app.listen(port, () => {
    console.log('App iniciada: http://localhost:' + port);
});

/*
var AssistantV1 = require('ibm-watson/assistant/v1');
    
    const watson_api_key = '';
    const watson_assistant_id = '';
    const watson_workspace_id = '';

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
*/