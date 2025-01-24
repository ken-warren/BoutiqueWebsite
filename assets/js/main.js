/*================ scroll reveal =========== */

ScrollReveal ({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-container, h2, .pro-container img', { origin: 'top' });
ScrollReveal().reveal('#home, .home-container p, .home-container button', { origin: 'bottom' });
ScrollReveal().reveal('.home-container h1, .des', { origin: 'left' });
ScrollReveal().reveal('.home-container h, .pro-container', { origin: 'right' });


/*================ typed Text =========== */
const typed = new Typed('.multiple-text', {
    strings: ['Tailoring Services', 'Boutique Sales', 'Kitenge Designs'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});
