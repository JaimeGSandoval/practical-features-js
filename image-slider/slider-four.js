const slideImage = document.querySelectorAll('.slide-image');
const slidesContainer = document.querySelector('.slides-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const navigationDots = document.querySelector('.navigation-dots');
const numberOfImages = slideImage.length;
const slideWidth = slideImage[0].getBoundingClientRect().width;
let currentSlide = 0;

const createNavigationDots = () => {
  for (let i = 0; i < numberOfImages; i++) {
    const dot = document.createElement('div');
    dot.classList.add('single-dot');
    navigationDots.appendChild(dot);

    dot.addEventListener('click', () => goToSlide(i));
  }

  navigationDots.children[0].classList.add('active');
};

const setActiveClass = () => {
  // const currentActive = document.querySelector('.slide-image.active');
  // currentActive.classList.remove('active');
  // slideImage[currentSlide].classList.add('active');

  const currentDot = document.querySelector('.single-dot.active');
  currentDot.classList.remove('active');
  navigationDots.children[currentSlide].classList.add('active');
};

const goToSlide = (slideNumber) => {
  slidesContainer.style.transform = `translateX(-${
    slideWidth * slideNumber
  }px)`;

  currentSlide = slideNumber;
  setActiveClass();
};

nextBtn.addEventListener('click', () => {
  if (currentSlide >= numberOfImages - 1) {
    goToSlide(0);
    return;
  }
  currentSlide++;
  goToSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
  if (currentSlide <= 0) {
    goToSlide(numberOfImages - 1);
    return;
  }
  currentSlide--;
  goToSlide(currentSlide);
});

/*
position: left values for images
  slideImage[0] = 0
  slideImage[1] = 100%;
  slideImage[2] = 200%
  etc.
*/

// This sets
const init = () => {
  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + '%';
  });

  // slideImage[0].classList.add('active');

  createNavigationDots();
};

init();
