document.addEventListener('DOMContentLoaded', function() {
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function isValidPhone(phone) {
      const phoneRegex = /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
      return phoneRegex.test(phone);
    }
  
    function handleFormSubmit(formId, formDataCallback, successMessage) {
      const form = document.getElementById(formId);
      const thankYouMessage = document.getElementById('thank-you-message');
  
      if (form) {
        form.addEventListener('submit', function(event) {
          event.preventDefault();
  
          const formData = formDataCallback(form);
  
          if (formData) {
            console.log('Form submitted:', formData);
            if (thankYouMessage) {
              thankYouMessage.textContent = successMessage;
              thankYouMessage.style.display = 'block';
            }
            form.reset();
          }
        });
      }
    }
  
    // Contact Form
    handleFormSubmit('contact-form', function(form) {
      const name = form.elements.name.value;
      const email = form.elements.email.value;
      const subject = form.elements.subject.value;
      const message = form.elements.message.value;
  
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return null;
      }
  
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return null;
      }
  
      return { name, email, subject, message };
    }, 'Thank you for your message! We will get back to you soon.');
  
    // Reservation Form
    handleFormSubmit('reservation-form', function(form) {
      const name = form.elements.name.value;
      const email = form.elements.email.value;
      const phone = form.elements.phone.value;
      const date = form.elements.date.value;
      const time = form.elements.time.value;
      const guests = form.elements.guests.value;
      const requests = form.elements.requests.value;
  
      if (!name || !email || !phone || !date || !time || !guests) {
        alert('Please fill in all required fields.');
        return null;
      }
  
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return null;
      }
  
      if (!isValidPhone(phone)) {
        alert('Please enter a valid phone number.');
        return null;
      }
  
      return { name, email, phone, date, time, guests, requests };
    }, 'Reservation submitted! We will contact you to confirm.');
  
    // Hero Slideshow
    const heroImages = document.querySelectorAll('.hero-image');
    let currentImageIndex = 0;
  
    function showNextImage() {
      heroImages[currentImageIndex].classList.remove('active');
      currentImageIndex = (currentImageIndex + 1) % heroImages.length;
      heroImages[currentImageIndex].classList.add('active');
    }
  
    setInterval(showNextImage, 3000); // Change image every 3 seconds
  });