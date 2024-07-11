function dotMove() {
    const cursorMove = document.querySelector('.mouse-dot');

    window.addEventListener('mousemove', function(event) {
        gsap.to(cursorMove, {
            x: event.x,
            y: event.y,
            duration: 0.7,
            ease: 'back.out',
        });
    });
}

function headerAnimation() {
    const header = gsap.timeline();

    header.from('.logo-area, .main-menu li, .nav-btn', {
        y: -20,
        duration: 0.7,
        delay: 0.2,
        opacity: 0,
        stagger: 0.1,
    });

    header.from('.hero-area h1', {
        x: -100,
        opacity: 0,
        duration: 0.5,
    });

    header.from('.hero-area p', {
        x: -70,
        opacity: 0,
        duration: 0.4,
    });

    header.from('.hero-area .primary-btn', {
        opacity: 0,
        duration: 0.4,
    });

    header.from('.hero-area img', {
        x: 100,
        opacity: 0,
        duration: 0.6,
    }, '-=0.7');

    header.from('.brand-area .single-brand', {
        y: -20,
        duration: 0.6,
        opacity: 0,
        stagger: 0.1,
    });
}

function serviceAnimation() {
    const service = gsap.timeline({
        delay: 0.3,
        scrollTrigger: {
            trigger: '.service-section',
            scroller: 'body',
            start: 'top 30%',
            end: 'top -30%',
            scrub: 2,
        }
    });

    service.from('.section-title', {
        y: 30,
        opacity: 0,
        duration: 0.5,
    });

    service.from('.service-1', {
        x: -50,
        opacity: 0,
        duration: 0.8,
    }, 'first-row');

    service.from('.service-2', {
        x: 50,
        opacity: 0,
        duration: 0.8,
    }, 'first-row');

    service.from('.service-3', {
        x: -50,
        opacity: 0,
        duration: 0.8,
    }, 'second-row');

    service.from('.service-4', {
        x: 50,
        opacity: 0,
        duration: 0.8,
    }, 'second-row');

    service.from('.service-5', {
        x: -50,
        opacity: 0,
        duration: 0.8,
    }, 'third-row');

    service.from('.service-6', {
        x: 50,
        opacity: 0,
        duration: 0.8,
    }, 'third-row');
}

function caseAnimation() {
    const cases = gsap.timeline({
        delay: .3,
        scrollTrigger: {
            trigger: '.case-section',
            scroller: 'body',
            start: 'top 70%',
            end: 'top -70%',
            stagger: true,
        }
    });

    Shery.textAnimate(".section-title2", {
        style: 1,
        y: 10,
        delay: 0.1,
        duration: 1,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      });

    gsap.to('.all-cases .img-1', {
        yPercent: -10,
        scrollTrigger: {
            trigger: '.case-section',
            start: 'top 50%', 
            end: 'top -50%',
            scrub: true,
        }
    });
    
    gsap.to('.all-cases .img-2', {
        yPercent: -30,
        scrollTrigger: {
            trigger: '.case-section',
            start: 'top 50%', 
            end: 'top -50%',
            scrub: true,
        }
    });
}

dotMove();
headerAnimation();
serviceAnimation();
caseAnimation();
