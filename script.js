document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById('contactForm');
    const confirmationDiv = document.getElementById('confirmation');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();


        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;


        document.getElementById('nameConfirmation').textContent = 'Usuário ' + name + ' cadastrado com sucesso!';
        document.getElementById('messageConfirmation').textContent = 'Mensagem: ' + message;
        confirmationDiv.style.display = 'block';


        contactForm.reset();
    });
});