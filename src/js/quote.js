import { getQuote } from '../helpers/locatStorage.js';
const quoteInfoEl = document.querySelector('.quote-info-content');

async function renderQuote() {
  const { author, quote } = await getQuote();
  await typeWriter(quote, 'favorites-text');
  await typeWriter(author, 'favorites-author');
}

function typeWriter(text, elementId) {
  return new Promise(resolve => {
    let i = 0;
    const element = document.createElement(
      elementId === 'favorites-text' ? 'p' : 'h3'
    );
    element.id = elementId;

    if (elementId === 'favorites-text') {
      element.classList.add('quote-text');
    } else {
      element.classList.add('quote-author');
    }

    quoteInfoEl.appendChild(element);

    function typing() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typing, 40);
      } else {
        resolve();
      }
    }

    typing();
  });
}

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        renderQuote();
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.addEventListener('DOMContentLoaded', () => {
  if (quoteInfoEl) {
    observer.observe(quoteInfoEl);
  }
});
