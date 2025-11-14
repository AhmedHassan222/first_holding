// Get DOM elements
const navToggler = document.getElementById('navToggler');
const navbarNav = document.getElementById('navbarNav');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav-link');
const langBtn = document.getElementById('langBtn');
const loginBtn = document.getElementById('loginBtn');

// Toggle mobile menu
if (navToggler) {
    navToggler.addEventListener('click', function () {
        navbarNav.classList.toggle('show');
        navToggler.classList.toggle('open');
        overlay.classList.toggle('show');
    });
}

// Close menu when clicking overlay
if (overlay) {
    overlay.addEventListener('click', function () {
        navbarNav.classList.remove('show');
        navToggler.classList.remove('open');
        overlay.classList.remove('show');
    });
}

// Close menu when clicking nav links on mobile
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        if (window.innerWidth < 992) {
            navbarNav.classList.remove('show');
            navToggler.classList.remove('open');
            overlay.classList.remove('show');
        }
    });
});

// Language button click handler
if (langBtn) {
    langBtn.addEventListener('click', function () {
        // Add your language change logic here
        console.log('Language button clicked!');
        // Example: Toggle between languages
        const currentLang = langBtn.querySelector('span').textContent;
        if (currentLang === 'ع') {
            langBtn.querySelector('span').textContent = 'EN';
            // Add your Arabic to English logic here
        } else {
            langBtn.querySelector('span').textContent = 'ع';
            // Add your English to Arabic logic here
        }
    });
}

// Login button click handler
if (loginBtn) {
    loginBtn.addEventListener('click', function () {
        // Add your login logic here
        console.log('Login button clicked!');
        // Example: Redirect to login page
        // window.location.href = '/login';
    });
}

// Close menu on window resize
window.addEventListener('resize', function () {
    if (window.innerWidth >= 992) {
        navbarNav.classList.remove('show');
        navToggler.classList.remove('open');
        overlay.classList.remove('show');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#language' && href !== '#login') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});


/* 

    LOGIC CODE FOR swiper PACKAJE (هتاخد الكود زي ما هو و هيشتغل يحمص)

*/
const swiper = new Swiper('.swiper', {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true, // returns to first after last
  speed: 600,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true,
  breakpoints: {
    0: { slidesPerView: 2 },
    576: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 },
  },
});
