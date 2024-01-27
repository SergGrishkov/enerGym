const confirmationModal = document.getElementById('confirmationModal');
const closeModalBtn = document.querySelector('.modal-subscribe-close-btn');
const modalCloseButton = document.querySelector(
  '.modal-subscribe-close-button'
);
const openSubModal = document.querySelector('.footer-button');

//-----close modal-----
function closeSubscribeModal() {
  confirmationModal.classList.remove('is-open');
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

//-----open modal-----

function openSubscribeModal() {
  confirmationModal.classList.add('is-open');
}

openSubModal.addEventListener('click', openSubscribeModal);

//----post----