
var slideup = {
      delay : 300,
      reset: true ,
      origin : 'bottom' ,
      duration : 1000 ,
      distance : '1rem'
}
var slideleft = {
      delay : 300,
      reset: true ,
      origin : 'left' ,
      duration : 1000 ,
      distance : '1rem'
}
var slideright = {
      delay : 300,
      reset: true ,
      origin : 'right' ,
      duration : 1000 ,
      distance : '1rem'
}
var box = {
      delay : 300 ,
}
ScrollReveal().reveal('.uppp' ,slideup );
ScrollReveal().reveal('.lefttt' ,slideleft );
ScrollReveal().reveal('.righttt' ,slideright );
ScrollReveal().reveal('.aboutathletes' ,box );
