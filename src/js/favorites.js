import { ExercisesController } from '../api/controllers/ExercisesController.js';
import { renderFavoriteCards } from '../helpers/render.js';
import {
  getFavoritCardsFromLocalStorage,
  isExerciseInFavorite,
  removeExerciseFromFavoriteById,
} from '../helpers/locatStorage.js';
// import { createMarkupModalEx } from './modal-exercise.js';

const exerciseCntrl = new ExercisesController();
let exercise;

const listFavorites = document.querySelector(
  '.favorites-container-content-items'
);

document.addEventListener('DOMContentLoaded', async () => {
  const favoriteInfoLs = renderFavoriteCards(getFavoritCardsFromLocalStorage());
  listFavorites.innerHTML = favoriteInfoLs;
  exercise = await exerciseCntrl.init();
});

const handleRemoveExercise = listFavorites.addEventListener(
  'click',
  async e => {

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
      console.log(exerciseInfo.json());
      // createMarkupModalEx(exerciseInfo.json());
    }
  }
);
