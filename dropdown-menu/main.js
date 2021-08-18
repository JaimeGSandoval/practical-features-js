/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const toggleDropdown = () => {
  document.getElementById('dropdown').classList.toggle('show');
};

// Close the dropdown menu if the user clicks outside of it
window.onclick = (event) => {
  if (!event.target.matches('.dropbtn')) {
    const dropDown = document.querySelector('.dropdown-content');
    if (dropDown.classList.contains('show')) {
      dropDown.classList.remove('show');
    }
  }
};

document.querySelector('.dropbtn').addEventListener('click', toggleDropdown);
