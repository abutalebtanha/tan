$(document).ready(function(){
 

    // slik bannerSlider
    $('.bannerSlider').slick({
      arrows:false,
      dots:true,
      dotsClass: 'bannerDots container',
    });

// bootstrap tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// new slider 

$(".productSlider").slick({
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 2000,
  

});

});



        
   