$('#1, #2, #3, #4').hide();

$('#1').fadeIn(850, function () {
    $('#2').fadeIn(850, function () {
        $('#3').fadeIn(850, function () {
            $('#4').fadeIn(850, function () {
            });
        });
    });
});