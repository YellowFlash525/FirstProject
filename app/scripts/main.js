$(".carousel").carousel({
	interval: 3500
})

$(".link-nav").on('click', function() {
     var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
     console.log(width);
     if(width < 770){
         var scrollAnchor = $(this).attr('data-scroll'),
         scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 48;
 
         $('body,html').animate({
             scrollTop: scrollPoint
         }, 1500);
 
         return false;
     }
     else {
         var scrollAnchor = $(this).attr('data-scroll'),
         scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 60;
 
         $('body,html').animate({
             scrollTop: scrollPoint
         }, 1000);
 
         return false;
     }

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
  $('.navbar-toggle').click(function() {
    //Toggles the class for the outter circles
    $(this).toggleClass('clicked');
  })
})

$('.nav a').on('click', function(){
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(width < 770){
        $('.navbar-toggle').click(); //bootstrap 3.x by Richard
    }   
})
