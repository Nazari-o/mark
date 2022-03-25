const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.list', {duration: 1, opacity: 1});
gsap.from('.anim1', {delay: .5, opacity: 0, duration: 1, y: -50, stagger: .2});
gsap.from('.left-side', {opacity: 0, delay: 1, duration: 1.5, y: -150, ease: 'bounce(1, 0.3)'});



