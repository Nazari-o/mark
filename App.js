const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.from('.list', {duration: 1, delay: .4, opacity: 0});
gsap.from('.anim1', {delay: .5, opacity: 0, duration: 1, y: -50, stagger: .2});
gsap.from('.left-side', {opacity: 0, delay: 1, duration: 1.5, y: -150, ease: 'bounce(1, 0.3)'});

tl.from('footer', {delay: 1.3, opacity: 0})

