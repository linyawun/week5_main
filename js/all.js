$(document).ready(function(){
    $('.navbar-toggler').click(function () {
        $('.navbar-menu').toggleClass('active');
    });
    $('.favorite span').mouseover(function(){
        $(this).html("favorite");
    });
    $('.favorite span').mouseout(function(){
        $(this).html("favorite_border");
    });
});