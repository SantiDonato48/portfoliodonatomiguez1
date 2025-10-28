// Inicializar animaciones AOS
AOS.init({
  duration: 1000,
  once: true
});

// Simulación de envío de formulario
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  alert(`¡Gracias por tu mensaje, ${nombre}! Te responderé pronto.`);
  e.target.reset();
});
