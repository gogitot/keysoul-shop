(function(){
  emailjs.init("clj3Fq_ElGewSJd3j"); // Public key
})();

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_fbm7d8s', 'template_jzaceu8', this)
    .then(function(response) {
      alert("Message sent successfully!");
    }, function(error) {
      console.log("FAILED...", error);
      alert("Failed to send message. Check console for details.");
    });
});
