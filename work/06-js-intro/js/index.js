let dropdown = document.querySelector('.dropdown-menu');
let dropdownOpen = false;

// Show or hide dropdown when clicking on link
document.querySelector('#nav-menu li a').addEventListener('click', function() {
  if (dropdownOpen) {
    dropdown.style.display = 'none';
    dropdownOpen = false;
  } else {
    dropdown.style.display = 'block';
    dropdownOpen = true;
  }
});
