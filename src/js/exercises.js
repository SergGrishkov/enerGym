import { firstLetterToUpper } from '../helpers/utils';
import { cardsContainer } from './filters';
import { inputSearch } from './filters';
import { collectCardsAnimated } from './filters';
import { ExercisesController } from '../api/controllers/ExercisesController';
import { createMarkupModalEx } from './modal-exercise';
// import { result } from 'lodash';

const exCntrl = new ExercisesController();

export const formSearch = document.querySelector('.form');
const header = document.querySelector('.home-filters-title');
const screenWidth = window.innerWidth;

// Запит на серв та параметри

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

  const apiUrl = `https://energyflow.b.goit.study/api/exercises?${parameters.filter}=${parameters.name}&page=${parameters.page}&limit=${parameters.limit}`;

  try {
    const response = await fetch(apiUrl);
    const responseJson = await response.json();
    if (responseJson.results) {
      const elems = responseJson.results;
      cardsContainer.innerHTML = renderExercises(elems);
      inputSearch.insertAdjacentElement('beforeEnd', formSearch);
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
      `<li class="list-item animated-card" data-exerciseid="${exercise._id}">
          <div class="workout-and-icons">
            <div class="workout-container">
              <p class="workout-bubble">Workout</p>
              <div class="star-cont">
                <p class="rating-num">${exercise.rating}</p>
                <svg class="star-icon" width="18" height="18">
                  <use href="./sprite.svg#icon-modal-rating-star"></use>
                </svg>
              </div>
            </div>
            <div class="start-cont">
              <button class="arrow-btn" type="button">
                Start
                <svg class="arrow" width="14" height="14">
                  <use href="./sprite.svg#icon-exercises-arrow"></use>
                </svg>
              </button>
            </div>
          </div>
          <div class="training-title">
            <svg class="icon-man" width="24" height="24">
              <use href="./sprite.svg#icon-exercises-man"></use>
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

// Відповідь на неіснуючий запит
function responseForNoResult() {
  return `<div class="response-cont"><p class="response-describe">Unfortunately, <span class="describe">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p></div>`;
}

// Слухач форми
formSearch.addEventListener('submit', async event => {
  event.preventDefault();
  const params = {
    [parameters.filter]: parameters.name,
    page: 1,
    limit: 10,
  };
  const inputFilling = formSearch.elements.delay.value.trim();
  params.keyword = inputFilling;
  const result = await (
    await exCntrl.getListExercisesBySubspecies(params)
  ).json();
  if (inputFilling && result.results.length > 0) {
    cardsContainer.innerHTML = renderExercises(result.results);
    collectCardsAnimated();
    formSearch.reset();
  } else {
    cardsContainer.innerHTML = responseForNoResult();
  }
});

// Слухач кліку вправ
cardsContainer.addEventListener('click', async event => {
  if (event.target.classList.contains('arrow-btn')) {
    const listItemsArr = Array.from(cardsContainer.children);
    const itemId = listItemsArr.filter(
      elem =>
        elem.dataset.exerciseid ===
        event.target.closest('.list-item').dataset.exerciseid
    )[0].dataset.exerciseid;
    let exObj = await (await exCntrl.getExerciseById(itemId)).json();
    createMarkupModalEx(exObj);
  }
});

// window.addEventListener('DOMContentLoaded', () => {
//   header.textContent = `Exercises/<span class="header-filter">${filter}</span>`;
// });
