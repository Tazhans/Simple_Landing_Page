$(document).ready(function() {
    $(".footer").hover(function () {
        $(this).animate({height: 180});
    }, function(){
        $(this).animate({height: 100});
    });
});