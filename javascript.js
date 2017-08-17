/*
(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(800)
            .delay(300)
            .fadeOut(250, showNextQuote);
    }
    
    showNextQuote();
    
})();
*/
$(document).ready(function(){
$('#1, #2, #3, #4').hide();

$('#1').fadeIn(850, function () {
    $('#2').fadeIn(850, function () {
        $('#3').fadeIn(850, function () {
            $('#4').fadeIn(850, function () {
                $('#4').addClass('glow');
            });
        });
    });
});
});