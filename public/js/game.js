$(document).ready(() => {

    $('.container img').replaceWith((i, v) => {
        return $('<div/>', {
            style: 'background-image: url(' + this.src + ');' +
            'width:' + this.width + 'px;' +
            'height:' + this.height + 'px;',
            class: 'fakeImg'
        })
    })

    var answerSize = document.getElementsByClassName('userAnswer').value.trim().lenght;

    $('.submit').click(() => {
        if(answerSize > 0) {
            alert('Maior que zero');
        } else {
            alert('Menor que zero');
        }
    });
});