// -----------------------------
// 1. Homepage Hero Slideshow
// -----------------------------
const slides = [
  'images/ganesh-hero1.jpg',
  'images/ganesh-hero2.jpg',
  'images/ganesh-hero3.jpg'
];

let currentSlide = 0;
const hero = document.querySelector('.hero');

function showSlide(index) {
  hero.style.backgroundImage = `url('${slides[index]}')`;
}

// Initial slide
showSlide(currentSlide);

// Auto-slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);


// -----------------------------
// 2. Confetti Animation (Festive Feel)
// -----------------------------
function launchConfetti() {
  const duration = 5 * 1000; // 5 seconds
  const end = Date.now() + duration;

  (function frame() {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
      confettiContainer.appendChild(confetti);

      // Animate confetti
      confetti.animate([
        { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
        { transform: `translateY(${window.innerHeight}px) rotate(360deg)`, opacity: 0 }
      ], {
        duration: 3000 + Math.random() * 2000,
        iterations: 1,
        easing: 'ease-out'
      });
    }

    setTimeout(() => {
      document.body.removeChild(confettiContainer);
    }, 4000);

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

// Launch confetti on page load
window.addEventListener('load', launchConfetti);


// -----------------------------
// 3. Smooth Scroll for Navbar Links
// -----------------------------
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e){
    if(this.hash !== '') {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
