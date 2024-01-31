import { ExercisesController } from '../api/controllers/ExercisesController';
import { createMarkupModalEx } from './modal-exercise';
import { openExerciseModal } from './modal-exercise';

export function createRatingModal(exId) {
  openModalRating();
  renderExerciseRatingModal(exId);
}

function renderExerciseRatingModal(exId) {
  sendRatingBtn.dataset.exerciseId = exId;
}

const modalRating = document.querySelector('.js-modal');
const btnCloseRating = document.querySelector('.js-close');
const mrating = document.querySelector('.mrating');
const formEl = document.querySelector('.rating-form');
const sendRatingBtn = document.querySelector('.js-sbutton');
const message = document.querySelector('.message');

btnCloseRating.addEventListener('click', closeModalRating);
window.addEventListener('click', function (event) {
  if (event.target === modalRating) {
    closeModalRating();
  }
});

function openModalRating() {
  modalRating.classList.add('is-open');
}

function closeModalRating() {
  modalRating.classList.remove('is-open');
  formEl.reset();
  openExerciseModal();
}

let mratingActive, mratingValue;

initMrating(mrating);

function initMrating(mrating) {
  initMratingVars(mrating);
  setMratingActiveWidth();

  if (mrating.classList.contains('rating-set')) {
    setMrating(mrating);
  }
}

function initMratingVars(mrating) {
  mratingActive = mrating.querySelector('.mrating-active');
  mratingValue = mrating.querySelector('.mrating-value');
}

function setMratingActiveWidth(index = mratingValue.innerHTML) {
  const mratingActiveWidth = index / 0.05;
  mratingActive.style.width = `${mratingActiveWidth}%`;
}

function setMrating(mrating) {
  const mratingItems = mrating.querySelectorAll('.mrating-item');
  for (let index = 0; index < mratingItems.length; index += 1) {
    const mratingItem = mratingItems[index];
    mratingItem.addEventListener('mouseenter', function (e) {
      initMratingVars(mrating);

      setMratingActiveWidth(mratingItem.value);
    });

    mratingItem.addEventListener('mouseleave', function (e) {
      setMratingActiveWidth();
    });

    mratingItem.addEventListener('click', function (e) {
      initMratingVars(mrating);
      const rate = (index + 1).toFixed(1);
      mratingValue.innerHTML = rate;
      setMratingActiveWidth();
    });
  }
}

let exerciseCntrl = new ExercisesController();

formEl.addEventListener('click', onSubmit);

async function onSubmit(event) {
  event.preventDefault();

  if (!event.target.tagName === 'BUTTON') return;

  if (event.target.tagName === 'BUTTON') {
    if (+event.currentTarget.children[0].innerText.trim() <= 0) return;
    const exer = event.currentTarget.elements.ratbtn.dataset.exerciseId;

    const ratingComment = {};
    ratingComment.rate = +event.currentTarget.children[0].innerText.trim();
    ratingComment.email = event.currentTarget.elements.email.value;
    ratingComment.review = event.currentTarget.elements.comment.value;

    try {
      const ratingEx = await exerciseCntrl.addRating(exer, ratingComment);

      const infoRating = ratingEx.info();
      if (infoRating.status === 200) {
        modalRating.classList.remove('is-open');
        formEl.reset();
        setMratingActiveWidth(0);
        createMarkupModalEx(ratingEx.json());
      } else {
        message.textContent = infoRating.message;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
