var AssistantV1 = require('ibm-watson/assistant/v1');
const keys = require('./../../keys.json');

const assistant = new AssistantV1({
    iam_apikey: keys.watson_assistant.iam_apikey,
    url: keys.watson_assistant.url,
    version: keys.watson_assistant.version
});

module.exports.chat = (userMessage, res) => {
    var requestStartTime = new Date().getTime();
    assistant.message({
        input: { text: userMessage },
        assistant_id: keys.watson_assistant.assistant_id,
        workspace_id: keys.watson_assistant.workspace_id
    }).then(result => {
        var botResponse = result.output.text[0];
        var requestEndTime = new Date().getTime();
        var resultRequestTime = requestEndTime - requestStartTime;
        console.log('Chat SRT: ' + resultRequestTime + 'ms');
        res.render('chat.html', {'bot': botResponse});
    }).catch(err => {
        console.log(err);
    });
}