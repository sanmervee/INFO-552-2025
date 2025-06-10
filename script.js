document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Stop the form from submitting
    successMessage.style.display = 'block'; // Show the success message
    form.reset(); // Optional: Clear form inputs
  });
});
