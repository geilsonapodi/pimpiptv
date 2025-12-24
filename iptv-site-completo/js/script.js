/**
 * SCRIPT PRINCIPAL - SITE IPTV
 */

document.addEventListener('DOMContentLoaded', () => {
    // Menu mobile
    setupMobileMenu();
    
    // Smooth scroll
    setupSmoothScroll();
    
    // Animações ao scroll
    setupScrollAnimations();
});

/**
 * Menu mobile
 */
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.style.display = 'none';
        });
    });
}

/**
 * Smooth scroll
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Animações ao scroll
 */
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar cards
    document.querySelectorAll('.channel-card, .plan-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

/**
 * Função para abrir WhatsApp
 */
function openWhatsApp(message = '') {
    const phone = '5511999999999'; // Altere para seu número
    const text = encodeURIComponent(message || 'Olá! Gostaria de mais informações sobre os planos IPTV');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}

/**
 * Função para ir para painel de vendas
 */
function openSalesPanel() {
    window.open('https://seu-painel.com', '_blank');
}

// Expor funções globalmente
window.openWhatsApp = openWhatsApp;
window.openSalesPanel = openSalesPanel;
