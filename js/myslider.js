// start preloader
var preloader = document.getElementById('preloader');
function preloaderFunction(){
    preloader.style.display='none';
}

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  center:true,
  autoplay:true,
  timeout:3000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})