import { ExercisesController } from '../api/controllers/ExercisesController';
import { renderFavoriteCards } from '../helpers/render';
import {
  getFavoritCardsFromLocalStorage,
  isExerciseInFavorite,
  removeExerciseFromFavoriteById,
} from '../helpers/locatStorage';
import { splitArraytoParts } from '../helpers/utils';
import { renderPagination } from './pagination';
import { createMarkupModalEx } from './modal-exercise.js';

const exerciseCntrl = new ExercisesController();
let exercise;
const chunk = 8;

const listFavorites = document.querySelector(
  '.favorites-container-content-items'
);
const paginationList = document.querySelector('.pagination-list');

const chunkArrayLs = splitArraytoParts(
  getFavoritCardsFromLocalStorage(),
  chunk
);

document.addEventListener('DOMContentLoaded', async () => {
  const  favoriteInfoLs = renderFavoriteCards(
    splitArraytoParts(getFavoritCardsFromLocalStorage(), chunk)[0]
  );
  listFavorites.innerHTML = favoriteInfoLs;
  exercise = await exerciseCntrl.init();
  if (window.innerWidth <= 767) {
    paginationList.innerHTML = renderPagination(chunkArrayLs.length, 1);
  }
});

listFavorites.addEventListener('click', async e => {
  if (
    e.target.ariaLabel !== 'icon-bucket' &&
    e.target.className !== 'favorite-remove-btn' &&
    e.target.className !== 'favorite-start-btn' &&
    e.target.ariaLabel !== 'start-arrow'
  )
    return;

  let id = Object.values(e.target.closest('[data-exerciseId]').dataset)[0];

  if (
    e.target.ariaLabel === 'icon-bucket' ||
    e.target.className === 'favorite-remove-btn'
  ) {
    try {
      if (isExerciseInFavorite(id)) {
        removeExerciseFromFavoriteById(id);
        document.querySelector(`[data-exerciseId="${id}"]`).remove();
      }
      window.location.reload();
    } catch (error) {
      console.log(`Exercise with ${id} can't be removed`, error);
    }
  }

  if (
    e.target.className === 'favorite-start-btn' ||
    e.target.ariaLabel === 'start-arrow'
  ) {
    const exerciseInfo = await exercise.getExerciseById(id);
    createMarkupModalEx(exerciseInfo.json());
  }
});

paginationList.addEventListener('click', getCurrentPage);

function getCurrentPage(event) {
  if (event.target.tagName === 'LI') {
    console.log(event.target.value);
    paginationList.innerHTML = renderPagination(
      chunkArrayLs.length,
      event.target.value
    );
    listFavorites.innerHTML = renderFavoriteCards(chunkArrayLs[event.target.value - 1]);
  }
}
// console.log(splitArraytoParts(getFavoritCardsFromLocalStorage(), 8));
// const res = splitArraytoParts(getFavoritCardsFromLocalStorage(), 8)

// console.log(renderPagination(res.length))

// document.addEventListener('DOMContentLoaded', putNumeraion);

// filtersBox.addEventListener('click', event =>
//   fetchDynamicApiUrl(event, 'filter')
// );
