import { firstLetterToUpper } from '../helpers/utils';
import { ExercisesController } from '../api/controllers/ExercisesController';

const filtersBox = document.querySelector('.filters-box');
const cardsContainer = document.getElementById('cards-list');
const defaultFilterButton = filtersBox.querySelector('.filters-list-item');
const defaultFilter = defaultFilterButton.dataset.filter;
const paginationList = document.querySelector('.pagination-list');

const screenWidth = window.innerWidth;

let limit = null;
let page = null;
limitPerScreenWidth(screenWidth);

// contr

let exerciseCntrl = new ExercisesController();

const filterParams = {
  filter: defaultFilter,
  page,
  limit,
};

async function fetchDefaultApiUrl() {
  let cardsFilterResp = await exerciseCntrl.init();
  try {
    const response = await cardsFilterResp.getListExercises(filterParams);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      cardsContainer.innerHTML = renderCards(data.results);
      renderPagination(data.totalPages, 1);
    } else {
      console.error('No exercises found.');
    }
  } catch (error) {
    console.error('Error fetching exercises:', error);
  }
}
// async function fetchDefaultApiUrl() {
//   try {
//     const response = await fetch(defaultApiUrl);
//     const data = await response.json();

//     if (data.results && data.results.length > 0) {
//       cardsContainer.innerHTML = renderCards(data.results);
//       renderPagination(data.totalPages, 1);
//     } else {
//       console.error('No exercises found.');
//     }
//   } catch (error) {
//     console.error('Error fetching exercises:', error);
//   }
// }

function limitPerScreenWidth(screenWidth) {
  if (screenWidth < 768) {
    // Мобільний
    limit = 8;
  } else if (screenWidth >= 768 && screenWidth < 1024) {
    // Планшет
    limit = 12;
  } else {
    // Десктоп
    limit = 12;
  }
  return limit;
}

function renderPagination(totalPages, currentPage) {
  paginationList.innerHTML = '';

  const paginationElements = Array.from({ length: totalPages }).reduce(
    (html, _, index) => {
      const pageNumber = index + 1;
      const isActive = pageNumber === currentPage ? 'active_pag_item' : '';
      return (
        html +
        `<li class="pagination-element ${isActive}" value="${pageNumber}">${pageNumber}</li>`
      );
    },
    ''
  );

  paginationList.innerHTML = paginationElements;
}

function togleActiveBtnClass(event) {
  filtersBox.querySelectorAll('.filters-list-item').forEach(button => {
    button.classList.remove('active_item');
  });
  event.target.classList.add('active_item');
}

async function fetchDynamicApiUrl(event) {
  if (event.target.classList.contains('filters-list-item')) {
    togleActiveBtnClass(event);
    const filter = event.target.dataset.filter;
    // const apiUrl = `https://energyflow.b.goit.study/api/filters?filter=${filter}&page=1&limit=${limit}`;
    filterParams.filter = filter;
    let cardsFilterResp = await exerciseCntrl.init();

    try {
      const response = await cardsFilterResp.getListExercises(filterParams);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        cardsContainer.innerHTML = renderCards(data.results);
        renderPagination(data.totalPages, 1);
      } else {
        console.error('No exercises found.');
      }
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
    // try {
    //   const response = await fetch(apiUrl);
    //   const data = await response.json();

    //   if (data.results && data.results.length > 0) {
    //     cardsContainer.innerHTML = renderCards(data.results);
    //     renderPagination(data.totalPages, 1);
    //   } else {
    //     console.error('No exercises found.');
    //   }
    // } catch (error) {
    //   console.error('Error fetching exercises:', error);
    // }
  }
}

async function getExercisesByName(event) {
  const targetExercises = event.target.dataset.name;
  if (targetExercises) {
    getExercisesFromApi(filterParams.filter, targetExercises);
  }
}

function renderCards(cards) {
  return cards.reduce(
    (html, card) =>
      html +
      `<li class="cards-list-item" data-name="${
        card.name
      }" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${card.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title" data-name="${card.name}">${firstLetterToUpper(
        card.name
      )}</h3>
      <p class="card-subtitle" data-name="${card.name}">${card.filter}</p>
    </li>`,
    ''
  );
}

// function renderExercises(exercises) {
//   return exercises.reduce(
//     (html, exercise) =>
//       html +
//       `        <li class="list-item">
//           <div class="workout-and-icons">
//             <div class="workout-container">
//               <p class="workout-bubble">Workout</p>
//               <div class="star-cont">
//                 <p class="rating-num">${exercise.rating}</p>
//                 <svg class="star-icon" width="18" height="18">
//                   <use
//                     href="./img/sprite/sprite.svg#icon-modal-rating-star"
//                   ></use>
//                 </svg>
//               </div>
//             </div>
//             <div class="start-cont">
//               <button class="arrow-btn" type="button">
//                 Start
//                 <svg class="arrow" width="14" height="14">
//                   <use
//                     href="./img/sprite/sprite.svg#icon-exercises-arrow"
//                   ></use>
//                 </svg>
//               </button>
//             </div>
//           </div>
//           <div class="training-title">
//             <svg class="icon-man" width="24" height="24">
//               <use href="./img/sprite/sprite.svg#icon-exercises-man"></use>
//             </svg>
//             <p class="training-name">${firstLetterToUpper(exercise.name)}</p>
//           </div>
//           <div class="indicators-cont">
//             <p class="indicators">
//               Burned calories: <span class="indicators-item">${
//                 exercise.burnedCalories
//               } / ${exercise.time} min</span>
//             </p>
//             <p class="indicators">
//               Body part: <span class="indicators-item">${
//                 exercise.bodyPart
//               }</span>
//             </p>
//             <p class="indicators">
//               Target: <span class="indicators-item">${exercise.target}</span>
//             </p>
//           </div>
//         </li>`,
//     ''
//   );
// }

document.addEventListener('DOMContentLoaded', fetchDefaultApiUrl);
filtersBox.addEventListener('click', fetchDynamicApiUrl);
cardsContainer.addEventListener('click', getExercisesByName);

// пагінація
// let total_pages = Math.ceil(result.length / limit);
// 1111
// function renderPagination(totalPages, currentPage) {
//   const paginationList = document.querySelector('.pagination-list');
//   paginationList.innerHTML = '';

//   for (let i = 1; i <= totalPages; i++) {
//     const paginationElement = document.createElement('li');
//     paginationElement.classList.add('pagination-element');
//     paginationElement.textContent = i;
//     paginationElement.value = i;
//     if (i === currentPage) {
//       paginationElement.classList.add('active_pag_item');
//     }
//     paginationList.appendChild(paginationElement);
//   }
// }

// renderPagination(total_pages, current_page);
// 22222
// function renderPagination(totalPages, currentPage) {
//   const paginationList = document.querySelector('.pagination-list');
//   paginationList.innerHTML = '';

//   const paginationElements = Array.from({ length: totalPages }).reduce(
//     (html, _, index) => {
//       const pageNumber = index + 1;
//       const isActive = pageNumber === currentPage ? 'active_pag_item' : '';
//       return (
//         html +
//         `<li class="pagination-element ${isActive}" value="${pageNumber}">${pageNumber}</li>`
//       );
//     },
//     ''
//   );

//   paginationList.innerHTML = paginationElements;
// }

// renderPagination(total_pages, current_page);
