import { firstLetterToUpper } from '../helpers/utils';
import { ExercisesController } from '../api/controllers/ExercisesController';
import { getExerciseFromApi } from './exercises';
import { renderPagination } from './pagination';
import { formSearch } from './exercises';

export const inputSearch = document.querySelector('.search-container');
const filterSection = document.querySelector('.home-filters');
const exerPaginationContainerEl = document.querySelector(
  '.exercsise-pagination-list'
);

const filtersBox = document.querySelector('.filters-box');
const cardsContainer = document.getElementById('cards-list');
const defaultFilterButton = filtersBox.querySelector('.filters-list-item');
const defaultFilter = defaultFilterButton.dataset.filter;
const paginationList = document.querySelector('.pagination-list');

const screenWidth = window.innerWidth;

// controller----
// --------------
let exerciseCntrl = new ExercisesController();
// --------------
// ----controller

let limit = null;
let page = 1;

const filterParams = {
  filter: defaultFilter,
  page,
  limit,
};

// onScroll----
// ------------
function onScroll() {
  filterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
// ------------
// ----onScroll
// PageCardsLimit---
// ----------------
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
// ----------------
// ---PageCardsLimit

// pagination------
// ----------------
async function onPageClick(event) {
  const pageNumber = parseInt(event.target.getAttribute('value'));
  filterParams.page = pageNumber;
  await fetchDynamicApiUrl(event);
  onScroll();
}
// -------------
// ---pagination

// togleActive-----
// ----------------
function togleActiveBtnClass(event) {
  filtersBox.querySelectorAll('.filters-list-item').forEach(button => {
    button.classList.remove('active_item');
  });
  event.target.classList.add('active_item');
}
// ---------------
// ----togleActive

// animation-----
// --------------
export function collectCardsAnimated() {
  const cards = document.querySelectorAll('.animated-card');
  cards.forEach(card => {
    card.style.opacity = '0';
  });
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
    }, index * 100);
  });
}
// --------------
// -----animation

// Functions for fetch data from Api
// Default cards fetching--
// ------------------------
async function fetchDefaultApiUrl() {
  try {
    const response = await exerciseCntrl.getListExercises(filterParams);
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      limitPerScreenWidth(screenWidth);
      cardsContainer.innerHTML = renderCards(data.results);
      collectCardsAnimated();
      paginationList.innerHTML = renderPagination(
        data.totalPages,
        filterParams.page
      );
    } else {
      console.error('No exercises found.');
    }
  } catch (error) {
    console.error('Error fetching exercises:', error);
  }
}
// ------------------------
// --Default cards fetching

// Fetching after clicking----
// ---------------------------
async function fetchDynamicApiUrl(event, source) {
  if (
    source === 'filter' ||
    event.target.classList.contains('filters-list-item')
  ) {
    togleActiveBtnClass(event);
    const filter = event.target.dataset.filter;
    filterParams.filter = filter;
    filterParams.page = 1;
    limitPerScreenWidth(screenWidth);
  }
  try {
    const response = await exerciseCntrl.getListExercises(filterParams);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      cardsContainer.innerHTML = renderCards(data.results);
      inputSearch.innerHTML = '';
      formSearch.reset();
      exerPaginationContainerEl.innerHTML = '';
      paginationList.innerHTML = '';
      paginationList.innerHTML = renderPagination(
        data.totalPages,
        filterParams.page
      );
      collectCardsAnimated();
    } else {
      console.error('No exercises found.');
    }
  } catch (error) {
    console.error('Error fetching exercises:', error);
  }
}
// ---------------------------
// ----Fetching after clicking

// Cards Render----
// ----------------
function renderCards(cards) {
  return cards.reduce(
    (html, card) =>
      html +
      `<li class="cards-list-item animated-card" data-filter="${card.filter.toLowerCase()}" data-name="${
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
// ----------------
// ----Cards Render

// CAll for exerscises cards---
// ----------------------------
async function getExercisesByName(event) {
  const targetExercises = event.target.dataset.name;
  const selectedFilter = event.target.dataset.filter;

  if (targetExercises && selectedFilter) {
    let filterToSend = selectedFilter;
    if (selectedFilter === 'body parts') {
      filterToSend = 'bodypart';
    }
    await getExerciseFromApi(filterToSend, targetExercises);
  }
}
// ----------------------------
// ---CAll for exerscises cards

// listeners---
// ------------
document.addEventListener('DOMContentLoaded', fetchDefaultApiUrl);
filtersBox.addEventListener('click', event =>
  fetchDynamicApiUrl(event, 'filter')
);
cardsContainer.addEventListener('click', getExercisesByName);
paginationList.addEventListener('click', event =>
  onPageClick(event, 'pagination')
);
// ------------
// ---listeners
