import { firstLetterToUpper } from '../helpers/utils';
const filtersBox = document.querySelector('.filters-box');
const cardsContainer = document.getElementById('cards-list');
const defaultFilterButton = filtersBox.querySelector('.filters-list-item');
const defaultFilter = defaultFilterButton.dataset.filter;

const screenWidth = window.innerWidth;

let limit;
limitPerScreenWidth(screenWidth);

const defaultApiUrl = `https://energyflow.b.goit.study/api/filters?filter=${defaultFilter}&page=1&limit=${limit}`;

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

async function fetchDefaultApiUrl() {
  try {
    const response = await fetch(defaultApiUrl);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      cardsContainer.innerHTML = renderCards(data.results);
    } else {
      console.error('No exercises found.');
    }
  } catch (error) {
    console.error('Error fetching exercises:', error);
  }
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
    const apiUrl = `https://energyflow.b.goit.study/api/filters?filter=${filter}&page=1&limit=${limit}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        cardsContainer.innerHTML = renderCards(data.results);
      } else {
        console.error('No exercises found.');
      }
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  }
}

function renderCards(exercises) {
  return exercises.reduce(
    (html, card) =>
      html +
      `<li class="cards-list-item" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${card.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title">${firstLetterToUpper(card.name)}</h3>
      <p class="card-subtitle">${card.filter}</p>
    </li>`,
    ''
  );
}

document.addEventListener('DOMContentLoaded', fetchDefaultApiUrl);
filtersBox.addEventListener('click', fetchDynamicApiUrl);
