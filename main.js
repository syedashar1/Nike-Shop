var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});



//////for navbarrrrr
var limit = 850;
var heightofnav = "-90px"

document.getElementById("navbar").style.top = heightofnav;
window.onscroll = function() {scrollFunction()};
function scrollFunction()
{
      if (document.body.scrollTop > limit || document.documentElement.scrollTop > limit){document.getElementById("navbar").style.top = "0";}
      // else if (document.body.scrollTop > 820 || document.documentElement.scrollTop > 820){document.getElementById("navbar").style.top = "-35px";}

      else{document.getElementById("navbar").style.top = heightofnav ;}

}





VanillaTilt.init(document.querySelector(".box"), {
            		max: 45,
            		speed: 400
});



var slideleft = {
      // delay : 200,
      // reset: true ,
      origin : 'left' ,
      duration : 1900 ,
      distance : '17rem',
      // opacity : null ,
}
var slideright = {
      // delay : 200,
      // reset: true ,
      origin : 'right' ,
      duration : 1900 ,
      // opacity : null ,
      distance : '17rem',
}

var achieve ={
      delay : 300 ,
      // reset : false ,
      duration : 1000 ,opacity : null ,
      origin : 'bottom' ,
      distance : '3rem'

}

ScrollReveal().reveal('.righttt' ,slideright );
ScrollReveal().reveal('.lefttt' ,slideleft );
ScrollReveal().reveal('.achieve' ,achieve);
