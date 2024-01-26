import { ExercisesController } from '../api/controllers/ExercisesController.js'

//./api/controllers / ExercisesController.js'

// import { firstLetterToUpper } from './helpers/utils.js'

const modalEl = document.querySelector('.js-modal-container');
let exerciseID = '';//64f389465ae26083f39b189e

let exerciseCntrl = new ExercisesController();

const modalWindow = document.querySelector(".backdrop")
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape')
    modalWindow.classList.remove('is-open');
  window.removeEventListener('keydown');
	}); 



async function fetchExerciseData(id) {
  exerciseID = id;
  const response = await exerciseCntrl.getExerciseById(exerciseID);
  let exercise = await response.json();
  console.log(exercise);
  return exercise;
}



/* async function createMarkupModalEx(exerciseId) {
  try {
    const exercise = await fetchExerciseData(exerciseId);

modalEl.innerHTML = `<div class="modal-img-container">
      <img
        class="modal-image-exercise"
        src=${exercise.gifUrl}
        alt=${exercise.name}
      />
    </div>
    <h2 class="title-modal-exercise">name barbell pullover to press</h2>
    <p class="rating">${exercise.rating}</p>

    <div class="about-exercise">
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

    <p class="description-text">
      '${exercise.description}'
    </p>`;
  } catch (error) {
    console.error('Error fetching or creating markup:', error);
  }
}



createMarkupModalEx('64f389465ae26083f39b189e');
// createMarkupModalEx('64f389465ae26083f39b17a5');
*/