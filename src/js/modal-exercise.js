// import { update } from 'lodash';

import { ExercisesController } from '../api/controllers/ExercisesController.js'
// import {isExerciseInFavorite} from '../helpers/locatStorage.js'
// import {addExerciseToFavorite} from '../helpers/locatStorage.js'
// import {removeExerciseFromFavoriteById} from '../helpers/locatStorage.js'

//./api/controllers / ExercisesController.js'

// import { firstLetterToUpper } from './helpers/utils.js'
const modalWindow = document.querySelector('.backdrop');
const modalEl = document.querySelector('.js-modal-container');

const closeBtn = document.querySelector('.close-btn');
let inputExID = '64f389465ae26083f39b17a9' //64f389465ae26083f39b17a5 //64f389465ae26083f39b188e
let exerciseID = '';//64f389465ae26083f39b189e
let exercise = {};

let exerciseCntrl = new ExercisesController();
// let exercise = await exerciseCntrl.init();
// let idForLocal = {};


async function fetchExerciseData(id) {
  exerciseID = id;
  const response = await exerciseCntrl.getExerciseById(exerciseID);
  let exercise = await response.json();
  return exercise;
}
 
// fetchExerciseData(exerciseID)
async function createMarkupModalEx(exerciseId) {
  try {
    const exercise = await fetchExerciseData(exerciseId);
    const addFavBtn = modalEl.querySelector('.js-add-remove-btn');

let urlIconAddRemove = '';
let textBtn = '';
if (exercise && isExerciseInFavorites(exercise, getFavoriteExercises())) {
  urlIconAddRemove = './img/sprite/sprite.svg#icon-remove-favorites';
  textBtn = 'Remove from favorites';
} else {
  urlIconAddRemove = './img/sprite/sprite.svg#icon-add-favorites';
  textBtn = 'Add to favorites';
}

    modalEl.innerHTML = `<div
        class="modal-ex-img-container"
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
          

        <div class="rating">
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
              <button class="ex-modal-btn add-favorite js-add-remove-btn" type="button">
                ${textBtn}
                <p class="btn-icon-add-remove-favorite">
                  <svg
                    class="modal-icon-favorite"
                    width="18"
                    height="18"
                    aria-label="modal favorite icon"
                  >
                    <use
                      href='${urlIconAddRemove}'
                    ></use>
                  </svg>
                </p>
              </button>
            </li>
            <li class="ex-modal-btn-list-item">
              <button class="ex-modal-btn rating-btn" type="button">
                Give a rating
              </button>
            </li>
          </ul>
        </div>
      </div>`;

    } catch (error) {
    console.error('Error fetching or creating markup:', error);
  } finally {
    let ratingActive, ratingValue; // оголошуємо тут

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
    console.log("value", ratingValue.innerHTML);
  }

  function setRatingActiveWidth() {
    console.log(ratingValue.innerHTML);
    const ratingActiveWidth = ratingValue.innerHTML / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }
  }
  
}

let addFavBtn;

createMarkupModalEx(inputExID);

// createMarkupModalEx('64f389465ae26083f39b17a5');

// ======== CLOSE MODAL WINDOW ========

function closeModalOnEscape(event){
    if (event.key === 'Escape') {
      modalWindow.classList.remove('is-open');
      window.removeEventListener('keydown', closeModalOnEscape);
    }
  };

window.addEventListener('keydown', closeModalOnEscape);

   function closeModalOnMouse(e) {
    if ((e.target.classList.value === "modal-close-icon") || (e.target.classList.value === "backdrop is-open")) {
      modalWindow.classList.remove('is-open');
      window.removeEventListener('click', closeModalOnMouse);
    }
  };

window.addEventListener('click', closeModalOnMouse);

// ===============++++++++++

function getFavoriteExercises() {
  const storedExercisesString = localStorage.getItem('favoriteExercises');
  return storedExercisesString ? JSON.parse(storedExercisesString) : [];
}
function updateFavoriteExercises(newExercises) {
  localStorage.setItem('favoriteExercises', JSON.stringify(newExercises));
}

function isExerciseInFavorites(exercise, favoriteExercises) {
  return favoriteExercises.some(favExercise => favExercise._id === exercise._id);
}
// =============== ADD TO FAVORITE ===========




async function toggleFavorites() {
  try {
    // Fetch exercise if not fetched
    if (!exercise._id) {
      exercise = await fetchExerciseData(exerciseID);
    }

    // Get the current array from Local Storage 
    const storedExercises = getFavoriteExercises();

    // Check if the exercise is already in the favorites 
    const isFavorite = isExerciseInFavorites(exercise, storedExercises);

    if (isFavorite) {
      // Remove from favorites
      const updatedExercises = storedExercises.filter(ex => ex._id !== exercise._id);
      updateFavoriteExercises(updatedExercises);
      updateButtonUI(false);
      console.log('Exercise removed from favorites:', exercise);
    } else {
      // Add to favorites
      storedExercises.push(exercise);
      updateFavoriteExercises(storedExercises);
      updateButtonUI(true);
      console.log('Exercise added to favorites:', exercise);
    }
  } catch (error) {
    console.error('Error toggling favorites:', error);
  }
}


// -------- CLICK BUTTON 
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('add-favorite')) {
    // Check if the button was clicked
    toggleFavorites();
  }
});

// =====================


// ========= UPDATE BUTTON ADD TO REMOVE
function updateButtonUI(isFavorite) {
     const urlIcon = isFavorite ? './img/sprite/sprite.svg#icon-remove-favorites' : './img/sprite/sprite.svg#icon-add-favorites';
  const textBtn = isFavorite ? 'Remove from favorites' : 'Add to favorites'
  const updatedAddFavBtn = modalEl.querySelector('.js-add-remove-btn');
  console.log('isFavorite', isFavorite);
    updatedAddFavBtn.innerHTML = `<button class="ex-modal-btn add-favorite" type="button">${textBtn}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${urlIcon}'></use></svg></p></button>`;
}
  

// const ratings = document.querySelectorAll('.rating');
// if (ratings.length > 0) {
//   initRatings();
// }

//   function initRatings() {
//     let ratingActive, ratingValue;
//     for (let index = 0; index < ratings.length; index++) {
//       const rating = ratings[index];
//       initRating(rating);
//     }

//     function initRating(rating) {
//       initRatingVars(rating);
//       setRatingActiveWidth();
//     }
    
    
//   function initRatingVars(rating) {
//     ratingActive = rating.querySelector('#rating-active');
//     console.log("value", ratingValue.innerHTML);
//     ratingValue =  rating.querySelector('.rating-value');
//   }

//     function setRatingActiveWidth(index = ratingValue.innerHTML) {
//     console.log(ratingValue.innerHTML);
//     const ratingActiveWidth = index / 0.05;
//     ratingActive.style.width = `${ratingActiveWidth}%`;

//   }
// }




 let ratingActive, ratingValue; // оголошуємо тут

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
    console.log("value", ratingValue.innerHTML);
  }

  function setRatingActiveWidth() {
    console.log(ratingValue.innerHTML);
    const ratingActiveWidth = ratingValue.innerHTML / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }




