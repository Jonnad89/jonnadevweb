document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que la página se recargue

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('¡Mensaje enviado con éxito! Gracias por contactarme.');
            contactForm.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});