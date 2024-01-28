import { ExercisesController } from '../api/controllers/ExercisesController';

async function renderExerciseRatingModal(exerciseId) {
  const modalRating = document.querySelector('.js-modal');
  const btnCloseRating = document.querySelector('.js-close');
  const rating = document.querySelector('.mrating');
  const formEl = document.querySelector('.rating-form');

  modalRating.classList.add('is-open');

  function closeModal() {
    modalRating.classList.remove('is-open');
  }

  let exerciseCntrl = new ExercisesController();
  let exercise = await exerciseCntrl.init();

  btnCloseRating.addEventListener('click', closeModal);

  let ratingActive, ratingValue;

  initRating(rating);

  function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();

    if (rating.classList.contains('rating-set')) {
      setRating(rating);
    }
  }

  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating-active');
    ratingValue = rating.querySelector('.rating-value');
  }

  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating-item');
    for (let index = 0; index < ratingItems.length; index += 1) {
      const ratingItem = ratingItems[index];
      ratingItem.addEventListener('mouseenter', function (e) {
        initRatingVars(rating);

        setRatingActiveWidth(ratingItem.value);
      });

      ratingItem.addEventListener('mouseleave', function (e) {
        setRatingActiveWidth();
      });

      ratingItem.addEventListener('click', function (e) {
        initRatingVars(rating);
        const rate = index + 1;
        ratingValue.innerHTML = rate;
        setRatingActiveWidth();
      });
    }
  }

  formEl.addEventListener('click', onSubmit);

  async function onSubmit(event) {
    event.preventDefault();

    if (event.target.tagName === 'BUTTON') {
      if (+event.currentTarget.children[0].innerText.trim() <= 0) return;

      const ratingComment = {};
      ratingComment.rate = +event.currentTarget.children[0].innerText.trim();
      ratingComment.email = event.currentTarget.elements.email.value;
      ratingComment.review = event.currentTarget.elements.comment.value;
      console.log(ratingComment);
      try {
        const ratingEx = await exercise.addRating(exerciseId, ratingComment);
        console.log(ratingEx.json());
        closeModal();
      } catch (error) {
        console.error(error);
      }
    }
  }
}
// renderExerciseRatingModal('64f389465ae26083f39b17b3');
