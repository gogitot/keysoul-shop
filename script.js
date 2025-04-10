// Инициализиране на EmailJS с публичния ключ
(function() {
  emailjs.init("clj3Fq_ElGewSJd3j"); // Public key
})();

// Изпращане на формата
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_fbm7d8s", "template_jzaceu8", this)
    .then(function(response) {
      alert("Message sent successfully! Thank you.");
    }, function(error) {
      console.error("EmailJS Error:", error);
      alert("There was an error sending your message.");
    });
});
