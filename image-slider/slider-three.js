const thumbnails = document.getElementsByClassName('thumbnail');
const activeImages = document.getElementsByClassName('active');

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('mouseover', function () {
    activeImages[0].classList.remove('active');
    this.classList.add('active');
    document.getElementById('featured').src = this.src;
  });
}

const buttonRight = document.getElementById('slide-right');
const buttonLeft = document.getElementById('slide-left');

buttonLeft.addEventListener('click', function () {
  document.getElementById('slider').scrollLeft -= 180;
});

buttonRight.addEventListener('click', function () {
  document.getElementById('slider').scrollLeft += 180;
});
