// import { update } from 'lodash';

import { ExercisesController } from '../api/controllers/ExercisesController.js';
import {isExerciseInFavorite} from '../helpers/locatStorage.js'
import {addExerciseToFavorite} from '../helpers/locatStorage.js'
import {removeExerciseFromFavoriteById} from '../helpers/locatStorage.js'
import {createRatingModal} from "./modal-rating.js"

const body = document.body;
const modalWindow = document.querySelector('.backdrop');
const modalEl = document.querySelector('.js-modal-container');

const closeBtn = document.querySelector('.close-btn');

let exerciseID = ''; //64f389465ae26083f39b189e
let exerciseIn;

let exerciseCntrl = new ExercisesController();


export function openExerciseModal() {
  modalWindow.classList.add('is-open');
  body.classList.add('modal-open');
}


export function createMarkupModalEx(exercise) {
  exerciseIn = exercise;

  exerciseID = exercise._id
  modalWindow.classList.add('is-open');
  // body.style.overflow = 'hidden';
  window.addEventListener('keydown', closeModalOnEscape);
  window.addEventListener('click', closeModalOnMouse);

  
  let patternBtn;

  if (isExerciseInFavorite(exercise._id)) {
      patternBtn = `
      <button class="ex-modal-btn add-favorite js-add-remove-btn" type="button">
                Remove from favorites
                <p class="btn-icon-add-remove-favorite">
                  <svg
                    class="modal-icon-favorite"
                    width="18"
                    height="18"
                    aria-label="modal favorite icon"
                  >
                    <use
                      href='./sprite.svg#icon-remove-favorites'
                    ></use>
                  </svg>
                </p>
              </button>
      `
      // urlIconAddRemove = './img/sprite/sprite.svg#icon-remove-favorites';
      // textBtn = 'Remove from favorites';
    } else {
      patternBtn = `
      <button class="ex-modal-btn add-favorite js-add-remove-btn" type="button">
                Add to favorites
                <p class="btn-icon-add-remove-favorite">
                  <svg
                    class="modal-icon-favorite"
                    width="18"
                    height="18"
                    aria-label="modal favorite icon"
                  >
                    <use
                      href='./sprite.svg#icon-add-favorites'
                    ></use>
                  </svg>
                </p>
              </button>
      `
      // urlIconAddRemove = './img/sprite/sprite.svg#icon-add-favorites';
      // textBtn = 'Add to favorites';
    }

    modalEl.innerHTML = `
    <div class="modal-ex-img-container"
        style="
          background: linear-gradient(
              0deg,
              rgba(27, 27, 27, 0.2) 0%,
              rgba(27, 27, 27, 0.2) 100%
            ),
            url(${exercise.gifUrl}),
            lightgray -7.072px -25.893px / 107.482% 121.729% no-repeat;
          background-size: cover;
        "
      ></div>

      <div class="modal-ex-text-info">
        <div class="modal-ex-name-rating-container">
          <h2 class="title-modal-exercise">${exercise.name}</h2>
          

        <div class="modal-ex-rating-container rating">
          <div class="rating-value">${exercise.rating}</div>
          <div class="rating-body">
            <div id="rating-active" class="rating-active"></div>
              <div class="rating-items">
                 <input type="radio" class="rating-item" value="1" name="rating">
                 <input type="radio" class="rating-item" value="2" name="rating">
                 <input type="radio" class="rating-item" value="3" name="rating">
                 <input type="radio" class="rating-item" value="4" name="rating">
                 <input type="radio" class="rating-item" value="5" name="rating">
              </div>
          </div>
        </div>
          
          
         

        <div class="modal-ex-about-exercise-container">
          <ul class="about-exercise-list">
        <li>
          <h3 class="title-description">Target</h3>
          <p class="value-description">${exercise.target}</p>
        </li>
        <li>
          <h3 class="title-description">Body Part</h3>
          <p class="value-description">${exercise.bodyPart}</p>
        </li>
        <li>
          <h3 class="title-description">Equipment</h3>
          <p class="value-description">${exercise.equipment}</p>
        </li>
        <li>
          <h3 class="title-description">Popular</h3>
          <p class="value-description">${exercise.popularity}</p>
        </li>
        <li>
          <h3 class="title-description">Burned Calories</h3>
          <p class="value-description">${exercise.burnedCalories}/${exercise.time} min</p>
        </li>
          </ul>
        </div>

        <div class="modal-ex-description-text-container">
          <p class="description-text">
            ${exercise.description}
          </p>
        </div>

        <div class="ex-modal-btn-container">
          <ul class="button ex-modal-btn-list">
            <li class="ex-modal-btn-list-item">
              ${patternBtn}
            </li>
            <li class="ex-modal-btn-list-item">
              <button data-rating="${exercise._id}" class="ex-modal-btn rating-btn" type="button">
                Give a rating
              </button>
            </li>
          </ul>
        </div>
      </div>`;
    let ratingActive, ratingValue; // оголошую тут

    const rating = document.querySelector('.rating');
    if (rating) {
      initRating();
    }

    function initRating() {
      initRatingVars();
      setRatingActiveWidth();
    }

    function initRatingVars() {
      ratingActive = document.querySelector('#rating-active');
      ratingValue = document.querySelector('.rating-value');
    }

    function setRatingActiveWidth() {
      const ratingActiveWidth = ratingValue.innerHTML / 0.05;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }
  }


// ======== CLOSE MODAL WINDOW ========

function closeModalOnEscape(event) {
  if (event.key === 'Escape') {
    closeExerciseModal(); // закриття

  }
}

const closeIconUse = document.querySelector('.modal-close-icon use');

closeIconUse.addEventListener('click', function() {
  closeExerciseModal();

});

function closeModalOnMouse(e) {
  e.preventDefault();
  if (
    e.target.classList.value === 'close-btn' ||
    e.target.classList.value === 'modal-close-icon' ||
    e.target.classList.value === 'backdrop is-open'
  ) {
    closeExerciseModal();
  }

  if (e.target.classList.value.includes('rating-btn')) { 
      closeExerciseModal();
  } 
}

function closeExerciseModal() {
  modalWindow.classList.remove('is-open');
  body.classList.remove('modal-open');
  window.removeEventListener('keydown', closeModalOnEscape);
  window.removeEventListener('click', closeModalOnMouse);
}

// -------- CLICK BUTTON FAVORITE
modalEl.addEventListener('click', function (event) {
  if (event.target.classList.contains('add-favorite')) {

 const isFavorite = isExerciseInFavorite(exerciseIn._id);
    if (isFavorite) {
      removeExerciseFromFavoriteById(exerciseIn._id);
    } else {
      addExerciseToFavorite(exerciseIn);
    }
    updateButtonUI(!isFavorite);
  }

});


// ========= UPDATE BUTTON ADD TO REMOVE

function updateButtonUI(isFavorite) {
  const urlIcon = isFavorite
    ? './sprite.svg#icon-remove-favorites'
    : './sprite.svg#icon-add-favorites';
  const textBtn = isFavorite ? 'Remove from favorites' : 'Add to favorites';
  const updatedAddFavBtn = modalEl.querySelector('.js-add-remove-btn');
  updatedAddFavBtn.innerHTML = `<button class="ex-modal-btn add-favorite" type="button">${textBtn}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${urlIcon}'></use></svg></p></button>`;
}