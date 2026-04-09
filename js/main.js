/* ============================================
   GENTLEMAN'S GARAGE — Main JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Hero Slideshow ----
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.indicator');
  let currentSlide = 0;
  let slideInterval;

  function goToSlide(n) {
    slides.forEach(s => s.classList.remove('active'));
    indicators.forEach(i => i.classList.remove('active'));
    currentSlide = n % slides.length;
    if (slides[currentSlide]) slides[currentSlide].classList.add('active');
    if (indicators[currentSlide]) indicators[currentSlide].classList.add('active');
  }

  function nextSlide() { goToSlide(currentSlide + 1); }

  if (slides.length > 1) {
    slideInterval = setInterval(nextSlide, 6000);
    indicators.forEach(btn => {
      btn.addEventListener('click', () => {
        clearInterval(slideInterval);
        goToSlide(parseInt(btn.dataset.slide));
        slideInterval = setInterval(nextSlide, 6000);
      });
    });
  }

  // ---- Navbar scroll effect ----
  const nav = document.querySelector('.main-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.background = window.scrollY > 80
        ? 'rgba(5,5,5,0.97)'
        : 'rgba(10,10,10,0.9)';
    });
  }

  // ---- Scroll reveal ----
  const revealEls = document.querySelectorAll('.service-card, .gallery-item, .about-teaser, .booking-option');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // ---- Booking section toggle (developer feature) ----
  // To enable booking, set in localStorage:
  //   localStorage.setItem('gg_booking_enabled', 'true');
  // Or add ?booking=on to the URL
  const bookingSection = document.getElementById('booking-section');
  if (bookingSection) {
    const params = new URLSearchParams(window.location.search);
    const enabled = localStorage.getItem('gg_booking_enabled') === 'true' || params.get('booking') === 'on';
    if (enabled) {
      bookingSection.style.display = 'block';
      localStorage.setItem('gg_booking_enabled', 'true');
    }
  }

  // ---- Booking option selection ----
  document.querySelectorAll('.booking-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.booking-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      const radio = opt.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  // ---- Contact / Booking form handler ----
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const origText = btn.textContent;
      btn.textContent = 'SENT — THANK YOU!';
      btn.style.borderColor = '#c9a84c';
      btn.style.color = '#c9a84c';
      setTimeout(() => {
        btn.textContent = origText;
        btn.style.borderColor = '';
        btn.style.color = '';
        form.reset();
      }, 3000);
    });
  });

});
