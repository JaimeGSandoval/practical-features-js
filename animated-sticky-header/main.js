window.addEventListener('scroll', function () {
  // USE pageYOffset TO GET THE SCROLL POSITION
  let mainNav = document.getElementById('mainNav');
  if (window.pageYOffset > 0) {
    mainNav.classList.add('is-sticky');
  } else {
    mainNav.classList.remove('is-sticky');
  }

  // USE scrollY FOR SCROLL POSITION. scrollY works too BUT IT'S NOT GOOD FOR OLD BROWSERS
  // if (window.scrollY > 0) {
  //   mainNav.classList.add('is-sticky');
  // } else {
  //   mainNav.classList.remove('is-sticky');
  // }

  // ANOTHER WAY TO DO IT W/ OUT ADDING CLASSES. NOT THE BEST WAY TO DO IT, BUT IT WORKS
  // const logoImage = document.querySelector('.logo img');
  // const mainNav = document.querySelector('#main-nav');
  // const mainNavAnchors = document.querySelectorAll('#main-nav ul li a');

  // if (window.pageYOffset > 0) {
  //   logoImage.style.height = '64px';
  //   mainNav.style.backgroundColor = '#333';
  //   mainNavAnchors.forEach((a) => (a.style.color = '#fff'));
  // } else {
  //   logoImage.style.height = '84px';
  //   mainNav.style.backgroundColor = '#eee';
  //   mainNavAnchors.forEach((a) => (a.style.color = '#333'));
  // }
});
