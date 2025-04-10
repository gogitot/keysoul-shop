import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './style.css';

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('your_service_id', 'your_template_id', form.current, 'your_public_key')
      .then((result) => {
          alert('Съобщението е изпратено!');
      }, (error) => {
          alert('Грешка при изпращане: ' + error.text);
      });
  };

  return (
    <div className="container">
      <h1>Свържи се с нас</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Име" required />
        <input type="email" name="user_email" placeholder="Имейл" required />
        <textarea name="message" placeholder="Съобщение" required />
        <button type="submit">Изпрати</button>
      </form>
    </div>
  );
}

export default App;