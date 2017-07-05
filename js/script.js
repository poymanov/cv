$(document).ready(function() {
    $('.info-block-header').on('click', function () {
       $(this).next('.info-block-content').slideToggle('400');
    });
});