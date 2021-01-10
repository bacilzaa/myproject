$(document).ready(function () {
  //-------------------------------------------------Script Carousel-------------------------------------------------------------//  
    
  var opennewwin = window.innerWidth;
  rez(opennewwin);

  function rez(size){
    if(size < 700){
        $('.owl-carousel').owlCarousel({
            autoplay: true,
            autoplayHoverPause: true,
            items: 2,
            nav: true,
            dots: true,
            loop: true,
        });
    }else{
        $('.owl-carousel').owlCarousel({
            autoplay: true,
            autoplayHoverPause: true,
            items: 4,
            nav: true,
            dots: true,
            loop: true,
        });
    }
}

//-------------------------------------------------Script Tooltip------------------------------------------------------------------//  
    $('[data-toggle="tooltip"]').tooltip();


//------------------------------------------------Script Scroll-------------------------------------------------------------------//
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('.navbar').addClass('affix');
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('affix');
            $('.navbar').removeClass('fixed-top');
        }
    });
//------------------------------------------------Script Scroll------------------------------------------------------------------//

});

