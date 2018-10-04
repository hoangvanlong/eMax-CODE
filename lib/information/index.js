$(window).on('resize', function() {
    setHeight();
})
$(document).ready(function() {
    setHeight();
})

function setHeight() {
    var hSet = $(window).height() - $('.footer').outerHeight() - $('.header').outerHeight();
    $('.emax-information').height(hSet);
}