$(".carousel").carousel({
	interval: 5000
})

$('nav div ul li a').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 60;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 1000);

    return false;

})


$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    var height = document.getElementById('team1').offsetTop - 60;
    if (windscroll >= height) {
        $('nav').removeClass('myNav');
        $('nav').addClass('fixedNav');

    } else {

        $('nav').removeClass('fixedNav');
        $('nav').addClass('myNav');
    }

}).scroll();