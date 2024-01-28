import { firstLetterToUpper } from '../helpers/utils';
import { ExercisesController } from '../api/controllers/ExercisesController';
import { cardsContainer } from './filters';

const formSearch = document.querySelector('.input-container');
const exerciseList = document.querySelector('.workout-list');
const modalWindow = document.querySelector('.modal-exercise');
const screenWidth = window.innerWidth;

// Запит на серв та параметри

let exerciseCntrl = new ExercisesController();
let filter;
let name;
let page = 1;
let limit;

const parameters = {
  filter,
  name,
  page,
  limit,
};

function limitPerScreenWidth(width) {
  if (width < 1280) {
    // Мобільний
    parameters.limit = 8;
  } else {
    // Десктоп
    parameters.limit = 9;
  }
  return parameters.limit;
}
limitPerScreenWidth(screenWidth);

export async function getExerciseFromApi(filter, name) {
  parameters.filter = filter;
  parameters.name = name;
  // let exercise = await exerciseCntrl.init();

  const apiUrl = `https://energyflow.b.goit.study/api/exercises?${parameters.filter}=${parameters.name}&page=${parameters.page}&limit=${parameters.limit}`;
  try {
    // const response = (
    //   await exercise.getListExercisesBySubspecies(parameters)
    // ).json();
    const response = await fetch(apiUrl);
    const responseJson = await response.json();
    if (responseJson.results) {
      const elems = responseJson.results;
      cardsContainer.innerHTML = renderExercises(elems);
      //   console.log(responseJson);
    }
  } catch (error) {
    console.log(error);
  }
}
// Рендер карток
function renderExercises(exercises) {
  return exercises.reduce(
    (html, exercise) =>
      html +
      ` <li class="list-item">
          <div class="workout-and-icons">
            <div class="workout-container">
              <p class="workout-bubble">Workout</p>
              <div class="star-cont">
                <p class="rating-num">${exercise.rating}</p>
                <svg class="star-icon" width="18" height="18">
                  <use href="./img/sprite/sprite.svg#icon-modal-rating-star"></use>
                </svg>
              </div>
            </div>
            <div class="start-cont">
              <button class="arrow-btn" type="button">
                Start
                <svg class="arrow" width="14" height="14">
                  <use href="./img/sprite/sprite.svg#icon-exercises-arrow"></use>
                </svg>
              </button>
            </div>
          </div>
          <div class="training-title">
            <svg class="icon-man" width="24" height="24">
              <use href="./img/sprite/sprite.svg#icon-exercises-man"></use>
            </svg>
            <p class="training-name">${firstLetterToUpper(exercise.name)}</p>
          </div>
          <div class="indicators-cont">
            <p class="indicators">
              Burned calories:
              <span class="indicators-item">
                ${exercise.burnedCalories} / ${exercise.time} min
              </span>
            </p>
            <p class="indicators">
              Body part:
              <span class="indicators-item">${exercise.bodyPart}</span>
            </p>
            <p class="indicators">
              Target: <span class="indicators-item">${exercise.target}</span>
            </p>
          </div>
        </li>`,
    ''
  );
}

// formSearch.addEventListener('submit', event => {
//   event.preventDefault();
// });

// example function for buttons with listener

// const button = document.querySelector('.class');

// function clickButton() {

// }

// button.addEventListener('click', clickButton);
