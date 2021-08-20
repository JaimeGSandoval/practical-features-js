// To make an animated accordion, add max-height: 0, overflow: hidden and a transition for the max-height property, to the panel class.

// Then, use JavaScript to slide down the content by setting a calculated max-height, depending on the panel's height on different screen sizes:

const accordion = document.getElementsByClassName('accordion');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}
