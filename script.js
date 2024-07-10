document.addEventListener('DOMContentLoaded', () => {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".smooth-scroll"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".smooth-scroll", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
    });

    function dotMove() {
        var cursorMove = document.querySelector('.mouse-dot');

        function updateCursor(event) {
            const scrollPosition = locoScroll.scroll.instance.scroll;
            const mouseX = event.clientX;
            const mouseY = event.clientY + scrollPosition.y;

            gsap.to(cursorMove, {
                x: mouseX,
                y: mouseY,
                duration: 0.7,
                ease: 'back.out'
            });
        }

        window.addEventListener('mousemove', updateCursor);
    }

    function headerAnimation() {
        var header = gsap.timeline();

        header.from('.logo-area, .main-menu li, .nav-btn', {
            y: -20,
            duration: 0.7,
            delay: 0.2,
            opacity: 0,
            stagger: 0.1
        });

        header.from('.hero-area h1', {
            x: -100,
            opacity: 0,
            duration: 0.5
        });

        header.from('.hero-area p', {
            x: -70,
            opacity: 0,
            duration: 0.4
        });

        header.from('.hero-area .primary-btn', {
            opacity: 0,
            duration: 0.4
        });

        header.from('.hero-area img', {
            x: 100,
            opacity: 0,
            duration: 0.6
        }, '-=0.7');

        header.from('.brand-area .single-brand', {
            y: -20,
            duration: 0.6,
            opacity: 0,
            stagger: 0.1
        });
    }

    function serviceAnimation() {
        var service = gsap.timeline({
            delay: 0.3,
            scrollTrigger: {
                trigger: '.service-section',
                scroller: '.smooth-scroll',
                start: 'top 50%',
                end: 'top -50%',
                scrub: 2
            }
        });

        service.from('.section-title', {
            y: 30,
            opacity: 0,
            duration: 0.5
        });

        service.from('.service-1', {
            x: -50,
            opacity: 0,
            duration: 0.8
        }, 'first-row');

        service.from('.service-2', {
            x: 50,
            opacity: 0,
            duration: 0.8
        }, 'first-row');

        service.from('.service-3', {
            x: -50,
            opacity: 0,
            duration: 0.8
        }, 'second-row');

        service.from('.service-4', {
            x: 50,
            opacity: 0,
            duration: 0.8
        }, 'second-row');

        service.from('.service-5', {
            x: -50,
            opacity: 0,
            duration: 0.8
        }, 'third-row');

        service.from('.service-6', {
            x: 50,
            opacity: 0,
            duration: 0.8
        }, 'third-row');
    }

    dotMove();
    headerAnimation();
    serviceAnimation();

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
});
