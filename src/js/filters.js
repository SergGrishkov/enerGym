// example function for buttons with listener

// const button = document.querySelector('.class');

// function clickButton() {

// }

// button.addEventListener('click', clickButton);

import { firstLetterToUpper } from '../helpers/utils';
const filtersBox = document.querySelector('.filters-box');
const cardsContainer = document.getElementById('cards-list');
const defaultFilterButton = filtersBox.querySelector('.filters-list-item');
const defaultFilter = defaultFilterButton.dataset.filter;
const defaultApiUrl = `https://energyflow.b.goit.study/api/filters?filter=${defaultFilter}&page=1&limit=8`;

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch(defaultApiUrl);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      renderCards(cardsContainer, data.results);
    } else {
      console.error('No exercises found.');
    }
  } catch (error) {
    console.error('Error fetching exercises:', error);
  }
});
filtersBox.addEventListener('click', async event => {
  if (event.target.classList.contains('filters-list-item')) {
    filtersBox.querySelectorAll('.filters-list-item').forEach(button => {
      button.classList.remove('active_item');
    });
    event.target.classList.add('active_item');

    const filter = event.target.dataset.filter;
    const apiUrl = `https://energyflow.b.goit.study/api/filters?filter=${filter}&page=1&limit=8`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        renderCards(cardsContainer, data.results);
      } else {
        console.error('No exercises found.');
      }
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  }
});

function renderCards(container, exercises) {
  const html = exercises.reduce(
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
  container.innerHTML = html;
}
