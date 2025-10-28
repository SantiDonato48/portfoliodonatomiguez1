// Smooth scrolling para los enlaces de navegación
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

// Efecto de aparición suave al hacer scroll
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

// Aplicar efectos de aparición a las secciones
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Efecto de typing en el título principal
const title = document.querySelector('.header-content h1');
const originalText = title.textContent;
let charIndex = 0;

function typeWriter() {
    if (charIndex < originalText.length) {
        title.textContent = originalText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
}

// Iniciar efecto de typing cuando la página cargue
window.addEventListener('load', function() {
    title.textContent = '';
    setTimeout(typeWriter, 500);
    
    // Aplicar efectos de brillo intermitente a los títulos
    document.querySelectorAll('h2').forEach(h2 => {
        setInterval(() => {
            h2.style.textShadow = `0 0 10px rgba(14, 165, 233, ${Math.random() * 0.5 + 0.3})`;
        }, 2000);
    });
});

// Efecto de partículas en el header
function createParticles() {
    const header = document.querySelector('header');
    const particlesContainer = document.createElement('div');
    particlesContainer.style.position = 'absolute';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.pointerEvents = 'none';
    particlesContainer.style.overflow = 'hidden';
    particlesContainer.style.zIndex = '1';
    
    header.appendChild(particlesContainer);
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.backgroundColor = 'rgba(14, 165, 233, 0.7)';
        particle.style.borderRadius = '50%';
        particle.style.boxShadow = '0 0 10px rgba(14, 165, 233, 0.8)';
        
        // Posición aleatoria
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        particle.style.left = `${left}%`;
        particle.style.top = `${top}%`;
        
        particlesContainer.appendChild(particle);
        
        // Animación
        animateParticle(particle);
    }
}

function animateParticle(particle) {
    const duration = Math.random() * 10 + 10; // 10-20 segundos
    const keyframes = [
        { 
            transform: 'translate(0, 0)',
            opacity: 0
        },
        { 
            transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`,
            opacity: 0.7
        },
        { 
            transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`,
            opacity: 0
        }
    ];
    
    const options = {
        duration: duration * 1000,
        iterations: Infinity
    };
    
    particle.animate(keyframes, options);
}

// Iniciar partículas
createParticles();

// Efecto de brillo en los bordes de las tarjetas al hacer hover
document.querySelectorAll('.project-card, .experience-item, .skill-category').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = 'var(--shadow), 0 0 20px rgba(14, 165, 233, 0.6)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'var(--shadow)';
    });
});

// Contador de visitas simple
if (!localStorage.getItem('visitCount')) {
    localStorage.setItem('visitCount', '1');
} else {
    let count = parseInt(localStorage.getItem('visitCount'));
    localStorage.setItem('visitCount', (count + 1).toString());
}

console.log(`¡Bienvenido! Esta es tu visita número ${localStorage.getItem('visitCount')} al portafolio de Santino Donato.`);

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '5px';
    notification.style.color = 'white';
    notification.style.zIndex = '1000';
    notification.style.transition = 'all 0.3s ease';
    notification.style.background = 'linear-gradient(135deg, var(--primary-color), var(--accent-color))';
    notification.style.boxShadow = 'var(--glow)';
    notification.style.border = '1px solid rgba(14, 165, 233, 0.3)';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Mostrar notificación de bienvenida
setTimeout(() => {
    showNotification('¡Bienvenido al portafolio de Santino Donato!', 'success');
}, 1000);