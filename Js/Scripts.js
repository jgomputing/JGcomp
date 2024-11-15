document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile menu
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }
    
    if (menuClose && mobileMenu) {
        menuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }

    // Show navbar on scroll
    const navbar = document.getElementById('navbar'); // Ensure you have an element with ID 'navbar'
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 200) {
                navbar.classList.remove('hidden');
            } else {
                navbar.classList.add('hidden');
            }
        });
    }

    // Carousel functionality
    const carousel = document.getElementById('carousel');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    let index = 0;

    if (carousel && indicatorsContainer) {
        function showSlide(index) {
            if (carousel.children.length === 0) return;
            carousel.style.transform = `translateX(${-index * 100}%)`;
            updateIndicators();
        }

        function updateIndicators() {
            indicatorsContainer.querySelectorAll('.indicator').forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        indicatorsContainer.innerHTML = Array.from({ length: carousel.children.length }, (_, i) =>
            `<div class="indicator w-2 h-2 bg-gray-300 rounded-full cursor-pointer ${i === index ? 'active' : ''}" data-index="${i}"></div>`
        ).join('');

        indicatorsContainer.querySelectorAll('.indicator').forEach(dot => {
            dot.addEventListener('click', (e) => {
                index = parseInt(e.target.dataset.index);
                showSlide(index);
            });
        });

        // Touch support
        let startX = 0;

        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        carousel.addEventListener('touchmove', (e) => {
            if (!startX) return;
            let diff = startX - e.touches[0].clientX;
            if (diff > 50) {
                index = (index < carousel.children.length - 1) ? index + 1 : 0;
                showSlide(index);
                startX = 0;
            } else if (diff < -50) {
                index = (index > 0) ? index - 1 : carousel.children.length - 1;
                showSlide(index);
                startX = 0;
            }
        });

        // Initialize the carousel
        showSlide(index);
    } else {
        if (!carousel) {
            console.error('Carousel not found');
        }
        if (!indicatorsContainer) {
            console.error('Indicators container not found');
        }
    }
});


