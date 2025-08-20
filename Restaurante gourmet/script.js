document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    const menuSection = document.getElementById('menu');
    const reservationForm = document.getElementById('reservation-form');

    // Muestra/oculta el menú al hacer clic en el botón
    ctaButton.addEventListener('click', () => {
        menuSection.classList.toggle('hidden');
        if (!menuSection.classList.contains('hidden')) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Maneja el envío del formulario de reserva
    reservationForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que la página se recargue

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const guests = document.getElementById('guests').value;

        // Validaciones básicas
        if (name && email && date && guests > 0) {
            // Aquí podrías enviar los datos a un servidor
            alert(`Reserva de ${name} para ${guests} personas el ${date} confirmada. ¡Gracias!`);
            reservationForm.reset();
        } else {
            alert('Por favor, completa todos los campos correctamente.');
        }
    });
});