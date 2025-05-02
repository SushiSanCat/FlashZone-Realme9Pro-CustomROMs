// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Check if the href is one of the sections to redirect to index.html
        if (href === '#roms' || href === '#guides' || href === '#device-info') {
            e.preventDefault();
            window.location.href = `index.html${href}`;
        } else {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Smooth page transition for navigation links
document.querySelectorAll('a[href^="/"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = this.getAttribute('href');
        }, 500); // Match this duration with the CSS animation duration
    });
});

// Update copyright year automatically
const yearSpan = document.createElement('span');
yearSpan.textContent = new Date().getFullYear();
document.querySelector('footer p').innerHTML = `&copy; ${yearSpan.textContent} SushiSanCat. All rights reserved.`; 