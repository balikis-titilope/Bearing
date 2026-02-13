// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
    // Handle hash scroll on initial load
    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, null, targetId);
            }
        });
    });

    // Parallax effect
    const parallaxElements = document.querySelectorAll('[data-speed]');
    let ticking = false;
    
    const handleParallax = () => {
        const scrolled = window.pageYOffset;
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed');
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(handleParallax);
            ticking = true;
        }
    });

    // Reveal animations
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                element.classList.add('revealed');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});