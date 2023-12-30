// Select the skip link and main content element
const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('#main');

// When skip link is clicked, focus on main content
skipLink.addEventListener('click', function(event) {
  event.preventDefault();
  mainContent.focus();
});

// Select the menu button and menu element
const menuButton = document.querySelector('.button-menu');
const navMenu = document.querySelector('.dropdown-content');

// When menu button is clicked, toggle menu visibility
menuButton.addEventListener('click', function(event) {
  event.preventDefault();
  navMenu.classList.toggle('show');

});