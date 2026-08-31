// Shared chrome behavior: mobile menu toggle + general WhatsApp links.
// Included on every page.
(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    var generalWaText = "Hi Shyam, I'm looking for a property in Amanora.";
    var generalWaLink = window.RP ? window.RP.waLink(generalWaText) : '#';

    document.querySelectorAll('[data-wa-general]').forEach(function (el) {
      el.setAttribute('href', generalWaLink);
    });

    var toggleBtn = document.querySelector('.menu-toggle');
    var mobileMenu = document.querySelector('.mobile-menu');
    if (toggleBtn && mobileMenu) {
      toggleBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
      });
    }

    // Highlight the current page in the desktop nav.
    var here = (document.body.getAttribute('data-page') || '').toLowerCase();
    if (here) {
      document.querySelectorAll('.desktop-nav a[data-nav]').forEach(function (a) {
        if (a.getAttribute('data-nav').toLowerCase() === here) {
          a.classList.add('active');
        }
      });
    }
  });
})();
