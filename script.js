// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('show');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Reveal on scroll
const revealEls = document.querySelectorAll('[data-reveal]');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Privacy modal
const privacyModal = document.querySelector('[data-privacy-modal]');
const privacyOpen = document.querySelector('[data-privacy-open]');

if (privacyModal && privacyOpen) {
  const closeTriggers = privacyModal.querySelectorAll('[data-privacy-close]');
  const modalContent = privacyModal.querySelector('.modal__content');

  function closeModal() {
    privacyModal.setAttribute('hidden', '');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', handleKeydown);
    privacyOpen.focus();
  }

  function openModal() {
    privacyModal.removeAttribute('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', handleKeydown);
    if (modalContent) modalContent.focus();
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') closeModal();
  }

  privacyOpen.addEventListener('click', openModal);
  closeTriggers.forEach(trigger => {
    trigger.addEventListener('click', closeModal);
  });
}
