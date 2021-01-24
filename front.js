$(function(){

  AOS.init();
    
//    *******************************first swiper**********************************
     var swiper = new Swiper('.swiper-container-first', {
      slidesPerView: 1  ,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    
    //    *****************************************************************


//    *******************************back to top button****************************************
var btn = $('#button');

 

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

 

btn.on('click', function(e) {
  e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  $('html,body').animate({scrollTop:0}, '500');
}); 

//****************************************last slider*************************************************
//****************************************last slider*************************************************
//var swiper2 = new Swiper('.swiper-container-crd', {
//      slidesPerView: 1,
//      spaceBetween: 30,
//      grabCursor: true,
//      loop: true,
//      loopFillGroupWithBlank: true,
//      pagination: {
//        el: '.swiper-container-crd .swiper-pagination',
//        clickable: true,
//      },
//      breakpoints: {
//    
//        960: {
//          slidesPerView: 5,
//          spaceBetween: 30
//        },
//        720: {
//          slidesPerView: 3,
//          spaceBetween: 30
//        },
//        540: {
//          slidesPerView: 2,
//          spaceBetween: 30
//        },
//        320: {
//          slidesPerView: 1,
//          spaceBetween: 30
//        },
//    
//      }
//    });


var swiper2 = new Swiper('.swiper-container-crd', {
slidesPerView: 1,
spaceBetween: 10,
grabCursor: true,
loop: true,
loopFillGroupWithBlank: true,
pagination: {
el: '.swiper-container-crd .swiper-pagination',
clickable: true,
},
autoplay: {
delay: 2500,
disableOnInteraction: false,
},
breakpoints: {
960: {
slidesPerView: 5,
spaceBetween: 30
},
720: {
slidesPerView: 3,
spaceBetween: 30
},
540: {
slidesPerView: 1,
spaceBetween: 30
},
320: {
slidesPerView: 1,
spaceBetween: 30
},
}
});

























});
