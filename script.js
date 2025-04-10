(function () {
  emailjs.init("cl3jFq_E1Gew5d3j"); // Тук е твоят публичен ключ

  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('service_fbm7d8s', 'template_jzaceu8', this)
      .then(() => {
        document.getElementById('contact-form').reset();
        showPopup('Съобщението е изпратено успешно!');
      }, (error) => {
        showPopup('Грешка при изпращане.', true);
      });
  });

  // 👉 Функция за показване на pop-up съобщения
  function showPopup(message, isError = false) {
    const popupId = isError ? 'popup-error' : 'popup';
    const popup = document.getElementById(popupId);
    if (!popup) return;

    popup.textContent = message;
    popup.classList.add('show');

    setTimeout(() => {
      popup.classList.remove('show');
    }, 4000); // Скрии след 4 секунди
  }
})();
