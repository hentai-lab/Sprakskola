const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const fs = require('fs');
const keys = require('./../../keys.json');

const visual_Recognition = new VisualRecognitionV3({
    url: keys.visual_recognition.url,
    version: keys.visual_recognition.version,
    iam_apikey: keys.visual_recognition.iam_apikey,
});
const language_Translator = new LanguageTranslatorV3({
    iam_apikey: keys.language_translator.iam_apikey,
    url: keys.language_translator.url,
    version: keys.language_translator.version,
});

module.exports.game = (paramImg, userAnswer, imgId, res, option) => {
    var requestStartTime = new Date().getTime();
    var answer = 'Retorno da resposta';
    var help = 'Retorno da ajuda';
    var image = imgId;
    var params = {
        images_file: fs.createReadStream(paramImg)
    };
    visual_Recognition.classify(params).then(result => {
        var requestEndTime = new Date().getTime();
        var resultRequestTime = requestEndTime - requestStartTime;
        console.log('Image SRT: ' + resultRequestTime + 'ms');
        var recognized = result.images[0].classifiers[0].classes[0].class;
        if(option == '1') {
            language_Translator.translate({
                text: recognized,
                source: 'en',
                target: 'pt'
            }).then(translation => {
                help = translation.translations[0].translation;
                requestEndTime = new Date().getTime();
                resultRequestTime = requestEndTime - requestStartTime;
                console.log('Translate SRT: ' + resultRequestTime + 'ms');
                res.render('game.html', {'image': image, 'answer': answer, 'help': help});
            }).catch(err => {
                console.log(err);
            });
        } else {
            if(recognized == userAnswer) {
                imgId = Math.floor(Math.random() * 7);
                image = '/styles/images/' + imgId + '.png';
                answer = 'Acertou!';
                help = 'Retorno da ajuda';
            } else {
                answer = 'Errou!';
            }
            res.render('game.html', {'image': image, 'answer': answer, 'help': help});
        }
    }).catch(err => {
        console.log(err);
    });
};