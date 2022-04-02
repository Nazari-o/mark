const tl = gsap.timeline({defaults: {ease: 'circ.out'}});
let width = innerWidth;

// HEADER LOGO SHRINKING
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (width > 780) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector('.logo').style.width = "200px";
      document.querySelector('.header').style.paddingTop = "10px";
    } else {
      document.querySelector(".logo").style.width = "300px";
      document.querySelector('.header').style.paddingTop = "40px";
    }
  } else if (width < 780 || width > 480) {
    document.querySelector('.logo').style.width = "200px";
    document.querySelector('.header').style.paddingTop = "10px";
  } else {
    document.querySelector('.logo').style.width = "160px";
    document.querySelector('.header').style.paddingTop = "10px";
  }
}



tl.from('.list', {duration: 1, delay: .4, opacity: 0});
gsap.from('.anim1', {delay: .5, opacity: 0, duration: 1, y: -50, stagger: .2});
gsap.from('.left-side', {opacity: 0, delay: 1, duration: 1.5, y: -150, ease: 'bounce(1, 0.3)'});

gsap.from('.img-anim', {delay: 1, x: -400, opacity: 0, duration: 1.5, stagger: .3, scrollTrigger: '.img-anim'});
gsap.from('.anim2', {delay: 1, x: 400, opacity: 0, duration: .5, stagger: .3, scrollTrigger: '.anim2', ease: 'circ.out'});
// gsap.from('.footer', {delay: 1, duration: 1, opacity: 0, scrollTrigger: '.footer'});

gsap.from('.anim3', {delay: 1, opacity: 0, duration: 1, y: -200, stagger: .3, scrollTrigger: '.anim3'});
gsap.from('.anim31', {delay: 1, opacity: 0, duration: 1, y: 200, stagger: .3, scrollTrigger: '.anim31'});



