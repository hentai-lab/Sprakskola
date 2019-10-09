const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
const fs = require('fs');
const keys = require('./../../keys.json');

module.exports.visualRecognition = (paramImg, userAnswer, answer) => {
    var visualRecognition = new VisualRecognitionV3({
        url: keys.visual_recognition.url,
        version: keys.visual_recognition.version,
        iam_apikey: keys.visual_recognition.iam_apikey,
    });
    var params = {
        images_file: fs.createReadStream(paramImg)
    };
    visualRecognition.classify(params).then(result => {
        var recognized = result.images[0].classifiers[0].classes[0].class;
        if(recognized == userAnswer) {
            return('Brilliant!');
            //res.send('Brilliant!');
        } else {
            return('You are a such loser!');
            //res.send('You are a such loser!');
        }
    }).catch(err => {
        console.log(err);
    });
};