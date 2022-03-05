// To make an animated accordion, add max-height: 0, overflow: hidden and a transition for the max-height property, to the panel class.

// Then, use JavaScript to slide down the content by setting a calculated max-height, depending on the panel's height on different screen sizes:

const accordion = document.getElementsByClassName('accordion');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null; // this will close the panel that's clicked on
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

// 1. Define: Get all the elements with class name of accordion
// 2. loop through all the elements and add a click event to each
// 3. control flow: if the next element sibling of the element that's clicked on has a height value, that'll mean it's open, so we then set the height to null, hiding it. If the next element sibling doesn't have a value for maxHeight, that means it's closed and we add height to it by using scrollHeight
