document.addEventListener('DOMContentLoaded', function () {

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('show');
        });
    }

    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    const navItems = document.querySelectorAll('.nav-links a');

    navItems.forEach(function (link) {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    const buyButtons = document.querySelectorAll('.btn-buy');
    buyButtons.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Item added to cart!');
        });
    });

    const brandCards = document.querySelectorAll('.brand-card');
    brandCards.forEach(function (card) {
        card.addEventListener('click', function () {
            window.location.href = 'products.html';
        });
    });

    const shopNowBtn = document.querySelector('.btn-shop-now');
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = 'products.html';
        });
    }

    const exploreBtn = document.querySelector('.btn-explore');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    }
});
