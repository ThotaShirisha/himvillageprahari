// hero section slider


































let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
  if (index >= totalSlides) currentIndex = 0;
  if (index < 0) currentIndex = totalSlides - 1;

  const offset = -currentIndex * 100;
  document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex--;
  showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex++;
  showSlide(currentIndex);


  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    currentIndex++;
    showSlide(currentIndex);
  }, 5000);
});


let autoSlide = setInterval(() => {
  currentIndex++;
  showSlide(currentIndex);
}, 5000);

showSlide(currentIndex);