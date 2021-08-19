const openModal = () => {
  document.querySelector('.modal').style.display = 'block';
};

const closeModal = () => {
  document.querySelector('.modal').style.display = 'none';
};

const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

const showSlides = (n) => {
  const slides = document.getElementsByClassName('mySlides');
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
    return showSlides(slideIndex);
  }

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
    return showSlides(slideIndex);
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[n].style.display = 'block';
};

document.querySelectorAll('.hover-shadow').forEach((el, i) => {
  el.addEventListener('click', () => {
    openModal();
    showSlides(i);
  });
});

document.querySelector('.close').addEventListener('click', closeModal);
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
document.querySelector('.next').addEventListener('click', () => plusSlides(1));

let slideIndex = 0;
showSlides(slideIndex);
