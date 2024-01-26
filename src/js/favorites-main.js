// import { getQuote } from '../helpers/locatStorage.js'; 

// async function updateQuoteOfTheDay() {
//   const quoteContainer = document.querySelector('.favorites-info-container');
//   const quoteTextElement = document.getElementById('favorites-text');
//   const authorElement = document.querySelector('.favorites-author');

//   try {
//     const { author, quote } = await getQuote();

//     quoteTextElement.textContent = quote;
//     authorElement.textContent = `${author}`;

//   } catch (error) {
//     console.error('Error fetching or updating the quote:', error);
//   }
// }

// updateQuoteOfTheDay();

import { getQuote } from '../helpers/locatStorage.js';

async function updateQuoteOfTheDay() {
  const quoteContainer = document.querySelector('.favorites-info-container');
  const quoteTextElement = document.getElementById('favorites-text');
  const authorElement = document.querySelector('.favorites-author');

  try {
    const { author, quote } = await getQuote();

    quoteTextElement.textContent = quote;
    authorElement.textContent = `${author}`;

  } catch (error) {
    console.error('Error fetching or updating the quote:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateQuoteOfTheDay();
});
