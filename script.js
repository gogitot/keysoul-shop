(function () {
    emailjs.init("cl3jFq_E1Gew5d3j");

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const popup = document.getElementById('popup');
        const popupError = document.getElementById('popup-error');

        emailjs.send('service_fbm7d8s', 'template_jzaceu8', {
            name: this.name.value,
            email: this.email.value,
            message: this.message.value
        })
            .then(() => {
                this.reset();
                popup.classList.add('show');
                setTimeout(() => popup.classList.remove('show'), 4000);
            })
            .catch(() => {
                popupError.classList.add('show');
                setTimeout(() => popupError.classList.remove('show'), 4000);
            });
    });
})();
