// Header //

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

// Hero //

const text =
  'Transform your physique and embrace a healthier lifestyle with our comprehensive fitness and nutrition support.';
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById('hero-text').innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

document.addEventListener('DOMContentLoaded', typeWriter);
