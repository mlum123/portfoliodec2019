// JavaScript to make navbar sticky, we'll add the sticky class to the navbar when we reach its scroll position, and remove the sticky class when we leave the scroll position

// when user scrolls, execute stickyFunction
window.onscroll = function() {
  stickyFunction();
};

// get navbar
var navbar = document.getElementsByClassName("menu-nav");

// get offset position of navbar
var sticky = navbar.offsetTop;

// add sticky class to navbar when you reach its scroll position; remove sticky class when you leave scroll position
function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// JavaScript to make slideshow buttons work to select different slides
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// JavaScript to make mobile (responsive) menu button and overlay show/not show
// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu");
const menuNav = document.querySelector("#menu-nav");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}
