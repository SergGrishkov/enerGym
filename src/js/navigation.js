document.addEventListener('DOMContentLoaded', event => {
  let path = window.location.pathname;
  const page = path === '/' ? 'index.html' : path.split('/').pop();

  function setActiveLink(selector) {
    let links = document.querySelectorAll(selector);

    links.forEach(link => {
      let href = link.getAttribute('href');

      if (href.includes(page)) {
        if (href.includes('index.html')) {
          link.classList.add('active-home');
        } else if (href.includes('favorites.html')) {
          link.classList.add('active-favorites');
        }
      }
    });
  }

  setActiveLink('.header-menu-link');
  setActiveLink('.mobile-menu-link');
});
