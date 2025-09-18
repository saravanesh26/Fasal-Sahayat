document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Logic ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const siteHeader = document.querySelector('.site-header');

    if (menuToggle && siteHeader) {
        menuToggle.addEventListener('click', () => {
            siteHeader.classList.toggle('nav-open');
        });
    }

    // --- Language Toggle Logic ---
    const translations = {
        'en': {
            'logo': 'Aura Farmer',
            'nav_home': 'Aura Farmer',
            'nav_about': 'About Us',
            'nav_models': 'ML-Models',
            'nav_team': 'Team',
            // ... add all your other English translations here
        },
        'hi': {
            'logo': 'ऑरा फार्मर',
            'nav_home': 'ऑरा फार्मर',
            'nav_about': 'हमारे बारे में',
            'nav_models': 'एमएल-मॉडल',
            'nav_team': 'हमारी टीम',
            // ... add all your other Hindi translations here
        }
    };

    window.setLanguage = (lang) => {
        localStorage.setItem('language', lang);

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        document.querySelectorAll('.lang-btn').forEach(btn => {
            const btnLang = btn.textContent.toLowerCase() === 'hin' ? 'hi' : 'en';
            btn.classList.toggle('inactive', btnLang !== lang);
        });
    };

    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
    
});