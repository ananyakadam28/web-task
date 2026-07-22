// ==========================================================
// TALKING TRAVEL — Interactions
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile nav toggle ---------- */
  const hamburger = document.getElementById('hamburgerBtn');
  const mainNav = document.getElementById('mainNav');

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // close menu when a link is tapped
    mainNav.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const setActiveLink = () => {
    let currentId = '';
    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) currentId = section.getAttribute('id');
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  };
  window.addEventListener('scroll', setActiveLink);

  /* ---------- Join form submission ---------- */
  const joinForm = document.getElementById('joinForm');
  const formSuccess = document.getElementById('formSuccess');

  if (joinForm) {
    joinForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const requiredFields = joinForm.querySelectorAll('[required]');
      let valid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = '#e0455f';
        } else {
          field.style.borderColor = '';
        }
      });

      if (!valid) {
        formSuccess.style.color = '#e0455f';
        formSuccess.textContent = 'Please fill in the required fields.';
        return;
      }

      formSuccess.style.color = '';
      formSuccess.textContent = 'Thanks! Your destination has been submitted.';
      joinForm.reset();

      setTimeout(() => { formSuccess.textContent = ''; }, 4000);
    });
  }

  /* ---------- Play buttons (demo only) ---------- */
  document.querySelectorAll('.play-btn, .btn-play, .watch-link').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (btn.tagName === 'A' && btn.getAttribute('href') === '#') e.preventDefault();
    });
  });

});