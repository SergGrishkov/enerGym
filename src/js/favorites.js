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
const modalWindow = document.querySelector('.backdrop');
const body = document.body;
let btnAddRemoveEl;

const chunkArrayLs = splitArraytoParts(
  getFavoritCardsFromLocalStorage(),
  chunk
);

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= 767) {
    let cards = splitArraytoParts(getFavoritCardsFromLocalStorage(), chunk)[0];
    listFavorites.innerHTML = renderFavoriteCards(cards);
    paginationList.innerHTML = renderPagination(chunkArrayLs.length, 1);
  } else {
    const favoriteInfoLs = renderFavoriteCards(
      getFavoritCardsFromLocalStorage()
    );
    listFavorites.innerHTML = favoriteInfoLs;
  }
});

window.addEventListener('resize', () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    let chunkArrayLocal = splitArraytoParts(
      getFavoritCardsFromLocalStorage(),
      chunk
    );
    let cards = splitArraytoParts(getFavoritCardsFromLocalStorage(), chunk)[0];
    listFavorites.innerHTML = renderFavoriteCards(cards);
    paginationList.innerHTML = renderPagination(chunkArrayLocal.length, 1);
  } else {
    const favoriteInfoLs = renderFavoriteCards(
      getFavoritCardsFromLocalStorage()
    );
    listFavorites.innerHTML = favoriteInfoLs;
    paginationList.innerHTML = '';
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
    let allstorage;
    try {
      if (isExerciseInFavorite(id)) {
        removeExerciseFromFavoriteById(id);
        document.querySelector(`[data-exerciseId="${id}"]`).remove();
        allstorage = getFavoritCardsFromLocalStorage()
          ? getFavoritCardsFromLocalStorage().length
          : 0;
        if (allstorage % chunk === 0) {
          paginationList.innerHTML = renderPagination(chunkArrayLs.length, 1);
          window.location.reload();
        }
        if (allstorage === 0) {
          paginationList.innerHTML = '';
          window.location.reload();
        }
      }
    } catch (error) {
      console.log(`Exercise with ${id} can't be removed`, error);
    }
  }

  if (
    e.target.className === 'favorite-start-btn' ||
    e.target.ariaLabel === 'start-arrow'
  ) {
    const exerciseInfo = await exerciseCntrl.getExerciseById(id);
    createMarkupModalEx(exerciseInfo.json());
    btnAddRemoveEl = document.querySelector('.js-add-remove-btn');
    btnAddRemoveEl.addEventListener('click', e => {
      if (
        window.location.pathname !== '/favorites.html' &&
        e.target.classList.contains('js-add-remove-btn')
      )
        return;
      if (e.target.innerText.trim() === 'Remove from favorites') {
        document.querySelector(`[data-exerciseId="${id}"]`).remove();
      }
    });
  }
});

paginationList.addEventListener('click', getCurrentPage);

function getCurrentPage(event) {
  if (event.target.tagName === 'LI') {
    paginationList.innerHTML = renderPagination(
      chunkArrayLs.length,
      event.target.value
    );
    listFavorites.innerHTML = renderFavoriteCards(
      chunkArrayLs[event.target.value - 1]
    );
  }
}

const closeIconUse = document.querySelector('.modal-close-icon use');
console.log(closeIconUse);

function closeModalOnEscape(event) {
  if (event.key === 'Escape') {
    closeExerciseModal(); 
  }
}

function closeExerciseModal() {
  modalWindow.classList.remove('is-open');
  body.classList.remove('modal-open');
  window.removeEventListener('keydown', closeModalOnEscape);
  window.removeEventListener('click', closeModalOnMouse);
  const favoriteInfoLs = renderFavoriteCards(getFavoritCardsFromLocalStorage());
  listFavorites.innerHTML = favoriteInfoLs;
}

function closeModalOnMouse(e) {
  e.preventDefault();

  if (
    e.target.classList.value === 'close-btn' ||
    e.target.classList.value === 'modal-close-icon' ||
    e.target.classList.value === 'backdrop is-open'
  ) {
    closeExerciseModal();
  }
}

closeIconUse.addEventListener('click', function () {
  closeExerciseModal();
});

window.addEventListener('keydown', function () {
  closeExerciseModal();
});
