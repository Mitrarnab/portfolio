$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})



$('#checkbox').on('change', function () {
    $('body').toggleClass('white-version');
    $('.ball').toggleClass('checked');
});




