const mainImg = document.querySelector('.main-img');
const boxContainer = document.querySelector('.box-container');

boxContainer.addEventListener('click', function (e) {
  const closest = e.target.closest('.box-container');
  console.log('closest', closest);

  if (closest) {
    console.log('BAN-KAI');
  }

  // if (!e.target.matches('[data-img]')) return; this works too, but you have to add data-img to each image tag
  // mainImg.src = e.target.src;
});
