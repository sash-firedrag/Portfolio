document.addEventListener('DOMContentLoaded', () => {
    // FAB Scroll Top Logic
    const fabScrollTop = document.getElementById('fabScrollTop');
    if (fabScrollTop) {
        fabScrollTop.onclick = function() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        };

        window.addEventListener('scroll', function() {
            fabScrollTop.style.display = window.scrollY > 200 ? 'flex' : 'none';
        });

        // Initial check
        if(window.scrollY < 200) fabScrollTop.style.display = 'none';
    }

    // Intersection Observer for Reveal Animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    revealElements.forEach(el => {
        observer.observe(el);
    });
});
