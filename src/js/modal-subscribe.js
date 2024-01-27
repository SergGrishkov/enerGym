const confirmationModal = document.getElementById('confirmationModal');
const closeModalBtn = document.querySelector('.modal-subscribe-close-btn');
const modalCloseButton = document.querySelector(
  '.modal-subscribe-close-button'
);

const footerForm = document.querySelector('.footer-form');

const modalSubscribeTextElement = document.getElementById('modalSubscribeText');

// -----close modal-----


function closeSubscribeModal() {
  confirmationModal.classList.remove('is-open');
  const newTextStart = 'You will receive notifications about new exercises.';
  modalSubscribeTextElement.textContent = newTextStart;
}

closeModalBtn.addEventListener('click', closeSubscribeModal);
modalCloseButton.addEventListener('click', closeSubscribeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeSubscribeModal();
  }
});

setTimeout(closeSubscribeModal, 8000);

window.addEventListener('click', function (event) {
  if (event.target === confirmationModal) {
    closeSubscribeModal();
  }
});


// -----open modal-----

function openSubscribeModal() {
  confirmationModal.classList.add('is-open');
}


function changeTextSubscribeModal() {
  if (modalSubscribeTextElement) {
    const newText = 'You are already subscribed';

    modalSubscribeTextElement.textContent = newText;
  } else {
    console.error('Element with id "modalSubscribeText" not found.');
  }
}

// ----post----

footerForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const emailInput = document.querySelector('[name="footer-email"]');
  const email = emailInput.value.trim();

  fetch('https://energyflow.b.goit.study/api/subscription', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email }),
  })
    .then(response => {
      if (response.ok) {
        emailInput.value = '';
        openSubscribeModal();
      } else {
        console.error(
          'An error occurred when sending a request to the server:',
          response.statusText
        );
        changeTextSubscribeModal();
        emailInput.value = '';
        openSubscribeModal();
      }
    })
    .catch(error => {
      console.error('An error occurred while executing the request:', error);
      alert('An error occurred while executing the request');
    });
});

