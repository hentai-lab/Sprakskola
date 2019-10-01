if ($(document).ready()) {
    var input = document.getElementById('message').value;
    $.ajax({
        url: '/message',
        type: 'POST',
        data: {
            message: input
        },
        dataType: 'json',
        success: (data) => {
            
        }
    });
} else {
    // Do nothing
}