// import { getQuote } from '../helpers/locatStorage.js'; 

// async function updateQuoteOfTheDay() {
//   const quoteContainer = document.querySelector('.quote-info-content');
//   const quoteTextElement = document.getElementById('quote-text');
//   const authorElement = document.querySelector('.quote-author');

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
  const quoteContainer = document.querySelector('.quote-info-content');
  const quoteTextElement = document.getElementById('quote-text');
  const authorElement = document.querySelector('.quote-author');

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
