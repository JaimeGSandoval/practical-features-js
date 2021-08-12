// document.querySelector('.test').addEventListener('click', function () {
//   document.body.style.backgroundImage = `url(${this.dataset.image})`;
// });

// const imgEl = document.querySelector('img');
// let timer = 3000;
// let index = 0;

// const images = ['sharingan.png', 'sharingan-2.jpg', 'sharingan-3.jpg'];

// CHANGE IMAGE ONCLICK OF IMAGE
// const changeImg = () => {
//   index++;
//   if (index > 2) {
//     index = 0;
//   }
//   // imgEl.style.backgroundImage = `url(${images[index]})`;
//   imgEl.src = images[index];
// };

// imgEl.addEventListener('click', changeImg);

// CHANGE IMAGE EVERY 3 SECS
// setInterval(() => {
//   index++;
//   if (index > 2) {
//     index = 0;
//   }
//   imgEl.src = images[index];
// }, timer);

// CHANGE IMAGE EVERY 3 SECS AND CLEAR THE INTERVAL WHEN IMAGE IS CLICKED
// const changeImage = () => {
//   index++;
//   if (index > 2) {
//     index = 0;
//   }
//   imgEl.src = images[index];
// };

// changeImage();

// const intervalID = setInterval(changeImage, timer);

// const stopInterval = () => {
//   clearInterval(intervalID);
// };

// imgEl.addEventListener('click', stopInterval);

// PLACED GLOBALS & FUNCTIONALITY IN A CONTAINING FUNCTION. CHANGE IMAGE EVERY 3 SECS AND CLEAR THE INTERVAL WHEN IMAGE IS CLICKED.
const testFunc = () => {
  const images = ['sharingan.png', 'sharingan-2.jpg', 'sharingan-3.jpg'];
  const imgEl = document.querySelector('img');
  let timer = 3000;
  let index = 0;

  const changeImage = () => {
    index++;
    if (index > images.length - 1) {
      index = 0;
    }
    imgEl.src = images[index];
  };

  changeImage();

  const intervalID = setInterval(changeImage, timer);

  const stopInterval = () => {
    clearInterval(intervalID);
  };

  imgEl.addEventListener('click', stopInterval);
};

setTimeout(testFunc, 3000);
