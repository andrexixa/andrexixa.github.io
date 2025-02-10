// Animación de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validación del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Gracias por tu mensaje, ' + name + '! Nos pondremos en contacto contigo pronto.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Por favor, completa todos los campos del formulario.');
    }
});