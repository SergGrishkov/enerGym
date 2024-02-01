import { ExercisesController } from '../api/controllers/ExercisesController';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.footer-form');
  const modal = document.getElementById('confirmationModal');
  const modalText = document.getElementById('modalSubscribeText');
  let exercisesController = new ExercisesController();
  let closeModalTimeout;

  function displayError(messages) {
    const errorElement = document.createElement('div');
    errorElement.classList.add('error-message');
    errorElement.textContent = messages;

    form.parentNode.insertBefore(errorElement, form.nextSibling);

    setTimeout(function () {
      errorElement.remove();
    }, 2000);
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const emailInput = form.querySelector("input[name='footer-email']").value;

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(emailInput)) {
      displayError('Email format is incorrect');
      return;
    }

    try {
      const response = await exercisesController.createSubscription({
        email: emailInput,
      });
      const infoDescr = response.info();

      modalText.textContent = infoDescr.message;
      modal.classList.add('is-open');
      form.querySelector("input[name='footer-email']").value = '';

      closeModalTimeout = setTimeout(function () {
        modal.classList.remove('is-open');
      }, 8000);
    } catch (error) {
      console.error('Error:', error);
    }
  });

  const closeModalBtns = document.querySelectorAll(
    '.modal-subscribe-close-btn, .modal-subscribe-close-button'
  );
  closeModalBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      modal.classList.remove('is-open');
      clearTimeout(closeModalTimeout);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      modal.classList.remove('is-open');
      clearTimeout(closeModalTimeout);
    }
  });

  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.remove('is-open');
      clearTimeout(closeModalTimeout);
    }
  });
});
