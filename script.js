/* Typing Effect with updated Machine Learning Focus */
const typed = new Typed('.typing', {
    strings: ['Data Engineer', 'Machine Learning Engineer', 'Full Stack Developer'],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

/* Simple Navbar Shadow Change on Scroll */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.padding = '1rem 9%';
    } else {
        navbar.style.background = 'white';
        navbar.style.padding = '1.5rem 9%';
    }
});