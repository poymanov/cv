$(document).ready(function() {
    $('.info-block-header').on('click', function () {
       $(this).toggleClass('info-block-header-active');
       $(this).next('.info-block-content').slideToggle('400');
    });
});