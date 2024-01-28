import { getQuote } from '../helpers/locatStorage.js';
const quoteContainerEl = document.querySelector('.favorites-info-container');
const quoteInfoEl = document.querySelector('.quote-info-content');

document.addEventListener('DOMContentLoaded', async () => {
  if (quoteInfoEl) {
    try {
      await getQuote();
      quoteInfoEl.insertAdjacentHTML('beforeend', await renderFavoriteQuote());
    } catch (error) {
      console.error('Error fetching or updating the quote:', error);
    }
  } else if (quoteContainerEl) {
    try {
      await getQuote();
      quoteContainerEl.insertAdjacentHTML(
        'beforeend',
        await renderFavoriteQuote()
      );
    } catch (error) {
      console.error('Error fetching or updating the quote:', error);
    }
  }
});

async function renderFavoriteQuote() {
  const { author, quote } = await getQuote();
  return `
  <p id="favorites-text">${quote}</p>
  <h3 class="favorites-author">${author}</h3>
  `;
}
