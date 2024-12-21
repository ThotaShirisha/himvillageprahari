

let index = 0;
const slides = document.querySelectorAll('.slider .slide'); 
const totalSlides = slides.length; 

function updateSlider() {

  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  slides[index].style.display = 'block';
}

function nextSlide() {
  index = (index + 1) % totalSlides; 
  updateSlider();
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlider();
}


document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);


setInterval(nextSlide, 2000);


updateSlider();




