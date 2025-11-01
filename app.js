document.querySelectorAll('.floating-nav a').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

window.addEventListener('load', () => {
 
    document.querySelectorAll('h2').forEach(h2 => {
        setInterval(() => {
            h2.style.textShadow = `0 0 10px rgba(14, 165, 233, ${Math.random() * 0.5 + 0.3})`;
        }, 2000);
    });
    
 
    const header = document.querySelector('header');
    const particlesContainer = document.createElement('div');
    Object.assign(particlesContainer.style, {
        position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
        pointerEvents: 'none', overflow: 'hidden', zIndex: '1'
    });
    header.appendChild(particlesContainer);
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        Object.assign(particle.style, {
            position: 'absolute', width: '2px', height: '2px',
            backgroundColor: 'rgba(14, 165, 233, 0.7)', borderRadius: '50%',
            boxShadow: '0 0 10px rgba(14, 165, 233, 0.8)',
            left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`
        });
        particlesContainer.appendChild(particle);
        
 
        particle.animate([
            { transform: 'translate(0, 0)', opacity: 0 },
            { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`, opacity: 0.7 },
            { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`, opacity: 0 }
        ], { duration: (Math.random() * 10 + 10) * 1000, iterations: Infinity });
    }
});


document.querySelectorAll('.project-card, .experience-item, .skill-category').forEach(card => {
    card.addEventListener('mouseenter', () => card.style.boxShadow = 'var(--shadow), 0 0 20px rgba(14, 165, 233, 0.6)');
    card.addEventListener('mouseleave', () => card.style.boxShadow = 'var(--shadow)');
});



setTimeout(() => {
    const notification = document.createElement('div');
    notification.textContent = '¡Bienvenido al portafolio de Santino Donato!';
    Object.assign(notification.style, {
        position: 'fixed', top: '80px', right: '20px', padding: '15px 20px',
        borderRadius: '5px', color: 'white', zIndex: '1000', transition: 'all 0.3s ease',
        background: 'linear-gradient(135deg, var(--primary), var(--accent))',
        boxShadow: 'var(--glow)', border: '1px solid rgba(14, 165, 233, 0.3)',
        opacity: '0', transform: 'translateX(100px)'
    });
    document.body.appendChild(notification);
    

    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100px)';
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}, 1000);