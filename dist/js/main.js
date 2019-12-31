// JavaScript to make navbar sticky, we'll add the sticky class to the navbar when we reach its scroll position, and remove the sticky class when we leave the scroll position

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

// JavaScript to make slideshow buttons work to select different slides
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("technical-slide");
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
