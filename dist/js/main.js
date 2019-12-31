// To make navbar sticky, we'll add the sticky class to the navbar when we reach its scroll position, and remove the sticky class when we leave the scroll position

// when user scrolls, execute stickyFunction
window.onscroll = function() {
  stickyFunction();
};

// get navbar
var navbar = document.getElementById("menu-nav");

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
