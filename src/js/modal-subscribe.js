const confirmationModal = document.getElementById('confirmationModal');
const closeModalBtn = document.querySelector('.modal-subscribe-close-btn');
const modalCloseButton = document.querySelector(
  '.modal-subscribe-close-button'
);
const footerForm = document.querySelector('.footer-form');
const modalSubscribeTextElement = document.getElementById('modalSubscribeText');

let isModalOpen = false;

// -----close modal-----

function closeSubscribeModal() {
  confirmationModal.classList.remove('is-open');
  const newTextStart = '⭐You will receive notifications about new exercises!';
  modalSubscribeTextElement.textContent = newTextStart;
  isModalOpen = false;
}
const closeModalButtons = document.querySelectorAll(
  '.modal-subscribe-close-btn, .modal-subscribe-close-button'
);

closeModalButtons.forEach(button => {
  button.addEventListener('click', closeSubscribeModal);
});

document.addEventListener('keydown', function (event) {
  if (isModalOpen && event.key === 'Escape') {
    closeSubscribeModal();
  }
});

window.addEventListener('click', function (event) {
  if (isModalOpen && event.target === confirmationModal) {
    closeSubscribeModal();
  }
});

// -----open modal-----

function openSubscribeModal() {
  confirmationModal.classList.add('is-open');
  isModalOpen = true;
  setTimeout(closeSubscribeModal, 8000);
}

function changeTextSubscribeModal() {
  if (modalSubscribeTextElement) {
    const newText = 'You are already subscribed';
    modalSubscribeTextElement.textContent = newText;
  } else {
    console.error('Element with id "modalSubscribeText" not found.');
  }
}
function changeTextSubscribeModal1() {
  if (modalSubscribeTextElement) {
    const newText400 =
      '☝ But you entered a bad or invalid email ✉.  Please try another one! ';
    modalSubscribeTextElement.textContent = newText400;
  } else {
    console.error('Element with id "modalSubscribeText" not found.');
  }
}
// ----post----

async function handleFormSubmission(event) {
  event.preventDefault();

  const emailInput = document.querySelector('[name="footer-email"]');
  const email = emailInput.value.trim();

  try {
    const response = await fetch(
      'https://energyflow.b.goit.study/api/subscription',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      }
    );

    emailInput.value = '';

    if (response.ok) {
      openSubscribeModal();
    } else {
      const errorMessage =
        response.status === 400
          ? '☝ But you entered a bad or invalid email ✉. Please try another one!'
          : `An error occurred when sending a request to the server: ${response.statusText}`;

      console.error(errorMessage);

      if (response.status === 400) {
        changeTextSubscribeModal1(errorMessage);
      } else {
        changeTextSubscribeModal(errorMessage);
      }

      openSubscribeModal();
    }
  } catch (error) {
    console.error(`An error occurred while executing the request: ${error}`);
    alert('An error occurred while executing the request');
  }
}

// Event listener for form submission
footerForm.addEventListener('submit', handleFormSubmission);
