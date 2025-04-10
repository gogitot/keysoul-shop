(function () {
  emailjs.init("cl3jFq_E1Gew5d3j3"); // Публичният ключ

  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('service_fbm7d8s', 'template_jzaceu8', this)
      .then(() => {
        document.getElementById('contact-form').reset();
        showPopup('Съобщението беше изпратено успешно!', false);
      }, (error) => {
        showPopup('Възникна грешка при изпращането. Моля, опитайте отново.', true);
      });
  });

  function showPopup(message, isError = false) {
    const popupId = isError ? 'popup-error' : 'popup';
    const popup = document.getElementById(popupId);

    popup.textContent = message;
    popup.classList.add('show');

    setTimeout(() => {
      popup.classList.remove('show');
    }, 4000);
  }
})();
