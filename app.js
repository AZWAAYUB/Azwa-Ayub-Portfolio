document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('header .btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Button clicked: ' + button.textContent);
        });
    });

    const contactForm = document.querySelector('.contact form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you shortly.');
        contactForm.reset();
    });
});