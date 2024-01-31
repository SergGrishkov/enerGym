import { firstLetterToUpper } from '../helpers/utils';
import { inputSearch } from './filters';
import { collectCardsAnimated } from './filters';
import { ExercisesController } from '../api/controllers/ExercisesController';
import { createMarkupModalEx } from './modal-exercise';
import { renderPagination } from './pagination';

const cardsContainer = document.getElementById('cards-list');
const filterPaginationList = document.querySelector('.pagination-list');
const exerPaginationList = document.querySelector('.exercsise-pagination-list');

const exCntrl = new ExercisesController();
export const headerSlash = document.querySelector('.slash');
export const headerWaist = document.querySelector('.home-filters-subtitle');
// const filtersContainer = document.querySelector('.filters-box');
export const formSearch = document.querySelector('.form');

const screenWidth = window.innerWidth;

// Запит на серв та параметри

let page = 1;
let limit;
let paginationSource = '';
let inputFilling;

export const parameters = {
  page,
  limit,
};
const filterAndName = {
  filter: '',
  name: '',
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

export function setFilterAndName(filter, name) {
  filterAndName.filter = filter;
  filterAndName.name = name.toLowerCase();
}

function onPaginationPageClick(event, paginationSource, pageNumber) {
  parameters.page = pageNumber;
  if (paginationSource === 'formSearch') {
    getExercisesFromFormSearch(event, parameters.page);
  } else {
    // Виклик функції, яка відповідає за пагінацію з основного запиту
    getExerciseFromApi(filterAndName.filter, filterAndName.name);
  }
}

export async function getExerciseFromApi(filter, name) {
  const newParameters = { [filter]: name, ...parameters };
  try {
    const responseJson = await (
      await exCntrl.getListExercisesBySubspecies(newParameters)
    ).json();
    if (responseJson.results) {
      const elems = responseJson.results;
      headerSlash.textContent = '/';
      cardsContainer.innerHTML = renderExercises(elems);
      collectCardsAnimated();
      inputSearch.insertAdjacentElement('beforeEnd', formSearch);
      filterPaginationList.innerHTML = '';
      exerPaginationList.innerHTML = renderPagination(
        responseJson.totalPages,
        parameters.page
      );
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
                <p class="rating-num">${exercise.rating.toFixed(1)}</p>
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

async function getExercisesFromFormSearch(event, pageNumber) {
  event.preventDefault();
  inputFilling = formSearch.elements.delay.value.trim();
  const params = {};
  if (!inputFilling) {
    params[filterAndName.filter] = filterAndName.name;
    params.page = pageNumber;
    params.limit = parameters.limit;
  } else {
    params[filterAndName.filter] = filterAndName.name;
    params.keyword = inputFilling;
    params.page = pageNumber;
    params.limit = parameters.limit;
  }
  const result = await (
    await exCntrl.getListExercisesBySubspecies(params)
  ).json();
  if (result.results.length > 0) {
    cardsContainer.innerHTML = renderExercises(result.results);
    collectCardsAnimated();
    exerPaginationList.innerHTML = renderPagination(
      result.totalPages,
      result.page
    );
  } else {
    cardsContainer.innerHTML = responseForNoResult();
  }
}

// Слухач кліку вправ
cardsContainer.addEventListener('click', async event => {
  const listItemsArr = Array.from(cardsContainer.children);
  if (event.target.classList.contains('cards-list-item')) {
    headerWaist.textContent = firstLetterToUpper(
      `${event.target.dataset.name}`
    );
    console.log(headerWaist.textContent);
  }
  if (event.target.classList.contains('arrow-btn')) {
    const itemId = listItemsArr.filter(
      elem =>
        elem.dataset.exerciseid ===
        event.target.closest('.list-item').dataset.exerciseid
    )[0].dataset.exerciseid;
    let exObj = await (await exCntrl.getExerciseById(itemId)).json();
    createMarkupModalEx(exObj);
  }
});

exerPaginationList.addEventListener('click', event => {
  const pageNumber = parseInt(event.target.getAttribute('value'));
  paginationSource = 'formSearch';
  onPaginationPageClick(event, paginationSource, pageNumber);
});
formSearch.addEventListener('submit', event => {
  event.preventDefault();
  paginationSource = 'formSearch';
  onPaginationPageClick(event, paginationSource, 1);
});
