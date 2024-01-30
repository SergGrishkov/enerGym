// Header -> Navigation Links //

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  const page =
    path === '/' || path === '/enerGym/' ? 'index.html' : path.split('/').pop();

  const setActiveLink = selector => {
    const links = document.querySelectorAll(selector);

    links.forEach(link => {
      const href = link.getAttribute('href');

      if (href.includes(page)) {
        const activeClass = href.includes('index.html')
          ? 'active-home'
          : 'active-favorites';
        link.classList.add(activeClass);
      }
    });
  };

  ['header-menu-link', 'mobile-menu-link'].forEach(selector =>
    setActiveLink(`.${selector}`)
  );
});

// Hero -> Paragraph delay 500ms //

document.addEventListener('DOMContentLoaded', function () {
  const heroText = document.querySelector('.hero-text');

  if (heroText) {
    heroText.style.display = 'none';

    setTimeout(function () {
      heroText.style.display = 'block';
    }, 500);
  }
});
