const navMenu = document.querySelector('.navbar-menu');
const navButton = document.querySelector('.navbar');
const btnLine = document.querySelectorAll('.btn-line');

const browseLink = document.querySelector('.browse-link');
const dropdown = document.querySelector('.dropdown-menu');

const hiddenInput = document.querySelector('.hidden-input');
const searchInput = document.querySelector('.search-item input');

const removeIcon = document.querySelector('.remove-icon');

const signupSection = document.querySelector('.signup-section');
const footer2 = document.querySelector('.footer-2');

function showMenu() {
  if (navMenu.classList.contains('show-navbar-menu')) {
    navMenu.classList.remove('show-navbar-menu');
    navButton.classList.remove('close');
    // signupSection.style.marginTop = '0';
    signupSection.style.transform = 'translateY(0)';
    footer2.style.transform = 'translateY(0)';
    signupSection.style.paddingTop = '8rem';
  } else {
    navMenu.classList.add('show-navbar-menu');
    navButton.classList.add('close');
    if (window.innerWidth <= 980 ) {
      signupSection.style.transform = 'translateY(80vh)';
      footer2.style.transform = 'translateY(63vh)';
      signupSection.style.paddingTop = '2rem';
      signupSection.style.transition = 'all 0.5s ease-out';
      footer2.style.transition = 'all 0.5s ease-out';
    }

    // if (window.innerWidth <= 678) {
    //   footer2.style.transform = 'translateY(70vh)';
    // }
    
  }

  if (navButton.classList.contains('close')) {
    btnLine[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    btnLine[1].style.opacity = '0';
    btnLine[2].style.transform = 'rotate(-45deg) translate(7px, -6px)'
  } else {
    btnLine[0].style.transform = 'rotate(-180deg)';
    btnLine[1].style.opacity = '1';
    btnLine[2].style.transform = 'rotate(180deg)';
  }
}

function showDropdown() {
  dropdown.classList.contains('show-dropdown') ? dropdown.classList.remove('show-dropdown') : dropdown.classList.add('show-dropdown');
}

function showHiddenInput() {
  hiddenInput.classList.add('show-hidden-input');
}
function hideHiddenInput() {
  hiddenInput.classList.remove('show-hidden-input');
}

function handleChange() {
  let value = searchInput.value;
  let intValue = parseInt(searchInput.value.length);
  
  if (value !== "") {
    hiddenInput.classList.remove('show-hidden-input'); 
  } else {
    hiddenInput.classList.add('show-hidden-input');
  }

  if (intValue >= 3) {
    removeIcon.classList.add('show-remove-icon');
  } else {
    removeIcon.classList.remove('show-remove-icon');
  }
}

navButton.addEventListener('click', showMenu);
browseLink.addEventListener('click', showDropdown);
searchInput.addEventListener('focus', showHiddenInput);
searchInput.addEventListener('blur', hideHiddenInput);
searchInput.addEventListener('keyup', handleChange);