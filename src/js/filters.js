import { firstLetterToUpper } from '../helpers/utils';
import { ExercisesController } from '../api/controllers/ExercisesController';
import { getExerciseFromApi } from './exercises';
import { renderPagination } from './pagination';

export const inputSearch = document.querySelector('.search-container');
const filtersBox = document.querySelector('.filters-box');
export const cardsContainer = document.getElementById('cards-list');
const defaultFilterButton = filtersBox.querySelector('.filters-list-item');
const defaultFilter = defaultFilterButton.dataset.filter;
const paginationList = document.querySelector('.pagination-list');

const screenWidth = window.innerWidth;

let limit = null;
let page = 1;
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
      paginationList.innerHTML = '';
      let paginationElements = renderPagination(
        data.totalPages,
        filterParams.page
      );
      paginationList.innerHTML = paginationElements;
    } else {
      console.error('No exercises found.');
    }
  } catch (error) {
    console.error('Error fetching exercises:', error);
  }
}

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
// pagination------
// ----------------

async function onPageClick(event) {
  const pageNumber = parseInt(event.target.getAttribute('value'));
  filterParams.page = pageNumber;
  console.log(pageNumber);
  console.log(filterParams);
  await fetchDynamicApiUrl(event);
}

// -------------
// ---pagination
function togleActiveBtnClass(event) {
  filtersBox.querySelectorAll('.filters-list-item').forEach(button => {
    button.classList.remove('active_item');
  });
  event.target.classList.add('active_item');
}

async function fetchDynamicApiUrl(event, source) {
  if (
    source === 'filter' ||
    event.target.classList.contains('filters-list-item')
  ) {
    togleActiveBtnClass(event);
    const filter = event.target.dataset.filter;
    filterParams.filter = filter;
    filterParams.page = 1; // Оновлюємо значення сторінки до першої
  }

  let cardsFilterResp = await exerciseCntrl.init();

  try {
    const response = await cardsFilterResp.getListExercises(filterParams);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      cardsContainer.innerHTML = renderCards(data.results);
      paginationList.innerHTML = '';
      let paginationElements = renderPagination(
        data.totalPages,
        filterParams.page
      );
      paginationList.innerHTML = paginationElements;
    } else {
      console.error('No exercises found.');
    }
  } catch (error) {
    console.error('Error fetching exercises:', error);
  }
}

async function getExercisesByName(event) {
  const targetExercises = event.target.dataset.name;
  const selectedFilter = event.target.dataset.filter;

  if (targetExercises && selectedFilter) {
    let filterToSend = selectedFilter; // Значення, що буде відправлене в функцію
    if (selectedFilter === 'body parts') {
      filterToSend = 'bodypart'; // Змінюємо значення фільтра для 'Body parts'
    }

    await getExerciseFromApi(filterToSend, targetExercises);
    // console.log(filterToSend, targetExercises);
  }
}

function renderCards(cards) {
  return cards.reduce(
    (html, card) =>
      html +
      `<li class="cards-list-item" data-filter="${card.filter.toLowerCase()}" data-name="${
        card.name
      }" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${card.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title" data-filter="${card.filter.toLowerCase()}" data-name="${
        card.name
      }">${firstLetterToUpper(card.name)}</h3>
      <p class="card-subtitle" data-filter="${card.filter.toLowerCase()}" data-name="${
        card.name
      }">${card.filter}</p>
    </li>`,
    ''
  );
}

document.addEventListener('DOMContentLoaded', fetchDefaultApiUrl);
filtersBox.addEventListener('click', event =>
  fetchDynamicApiUrl(event, 'filter')
);
cardsContainer.addEventListener('click', getExercisesByName);
paginationList.addEventListener('click', event =>
  onPageClick(event, 'pagination')
);
