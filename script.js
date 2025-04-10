(function () {
  emailjs.init("public_cl3jFq_E1Gew5d3j");

  const form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const popup = document.getElementById('popup');
    const popupError = document.getElementById('popup-error');

    emailjs.sendForm('service_fbm7d8s', 'template_jzaceu8', form)
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
