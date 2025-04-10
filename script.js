
(function(){
  emailjs.init("clj3Fq_ElGewSJd3j"); // Тук е твоят публичен ключ

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('your_service_id', 'your_template_id', this)
      .then(() => {
        document.getElementById('status-msg').textContent = "Съобщението е изпратено успешно!";
      }, (error) => {
        document.getElementById('status-msg').textContent = "Грешка при изпращане.";
      });
  });
})();
