function headerAnimation() {
    var header = gsap.timeline();

    header.from('.logo-area, .main-menu li, .nav-btn', {
        y: -20,
        duration: .7,
        delay: .2,
        opacity: 0,
        stagger: .1,
    })

    header.from('.hero-area h1', {
        x: -100,
        opacity: 0,
        duration: .5,
    })

    header.from('.hero-area p', {
        x: -70,
        opacity: 0,
        duration: .4,
    })

    header.from('.hero-area .primary-btn', {
        opacity: 0,
        duration: .4,
    })

    header.from('.hero-area img', {
        x: 100,
        opacity: 0,
        duration: .6,
    },'-=.7')

    header.from('.brand-area .single-brand', {
        y: -20,
        duration: .6,
        opacity: 0,
        stagger: .1,
    })
}

function serviceAnimation() {
    var service = gsap.timeline({
        delay: .3,
        scrollTrigger: {
            trigger: '.service-section',
            scroller: 'body',
            start: 'top 50%',
            end: 'top -50%',
            scrub: 2,
          }
    });
    
    service.from('.section-title', {
        y: 30,
        opacity: 0,
        duration: .5,
    })
    
    service.from('.service-1', {
        x: -50,
        opacity: 0,
        duration: .8,
    }, 'first-row')
    
    service.from('.service-2', {
        x: 50,
        opacity: 0,
        duration: .8,
    }, 'first-row')
    
    service.from('.service-3', {
        x: -50,
        opacity: 0,
        duration: .8,
    }, 'second-row')
    
    service.from('.service-4', {
        x: 50,
        opacity: 0,
        duration: .8,
    }, 'second-row')
    
    service.from('.service-5', {
        x: -50,
        opacity: 0,
        duration: .8,
    }, 'third-row')
    
    service.from('.service-6', {
        x: 50,
        opacity: 0,
        duration: .8,
    }, 'third-row')
}

headerAnimation();

serviceAnimation();