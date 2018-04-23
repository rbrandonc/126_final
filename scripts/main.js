document.addEventListener("DOMContentLoaded", function(event) { 
  // Detect scroll
  window.onscroll = function() {stick()};

  // Get the navbar
  var navbar = document.getElementById("nav");

  // Get nav offset
  var offset = navbar.offsetTop;

  //Stick the navbar when you scroll to it
  function stick() {
    if (window.pageYOffset >= offset) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  // toggle for navbar on mobile
  var burger = document.querySelectorAll('.navbar-burger')[0];
  burger.addEventListener('click', function () {
      var links = document.getElementById(burger.dataset.target);
      burger.classList.toggle('is-active');
      links.classList.toggle('is-active');
    });
});