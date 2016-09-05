$(".carousel").carousel({
	interval: 5000
})

$(".link-nav").on('click', function() {
    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 60;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 1000);

    return false;

})

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    var height = document.getElementById('team').offsetTop - 60;
    if (windscroll >= height) {
        $('nav').removeClass('myNav');
        $('nav').addClass('fixedNav');

    } else {

        $('nav').removeClass('fixedNav');
        $('nav').addClass('myNav');
    }

}).scroll();

$(function() {
  $('.navbar-header').on('click', function() {
    //Toggles the class for the outter circles
    $(this).toggleClass('clicked')
    //Toggles the class for the menu lines transformation into an X symbol
    $('.navbar-toggle').toggleClass('clicked')
  })
})