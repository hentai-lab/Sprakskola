const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const fs = require('fs');
const keys = require('./../../keys.json');

var answer = 'Retorno da resposta';
var help = 'Retorno da ajuda';

module.exports.visualRecognition = (paramImg, userAnswer, imgId, res) => {
    const visualRecognition = new VisualRecognitionV3({
        url: keys.visual_recognition.url,
        version: keys.visual_recognition.version,
        iam_apikey: keys.visual_recognition.iam_apikey,
    });
    var image = imgId;
    var params = {
        images_file: fs.createReadStream(paramImg)
    };
    visualRecognition.classify(params).then(result => {
        var recognized = result.images[0].classifiers[0].classes[0].class;
        if(recognized == userAnswer) {
            imgId = Math.floor(Math.random() * 7);
            image = '/styles/images/' + imgId + '.png';
            answer = 'Acertou!';
        } else {
            answer = 'Errou!';
        }
        res.render('game.html', {'image': image, 'answer': answer, 'help': help});
    }).catch(err => {
        console.log(err);
    });
};

module.exports.languageTranslator = (txtToTranslate) => {
    const languageTranslator = new LanguageTranslatorV3({
        // Nothing yet
    });
};