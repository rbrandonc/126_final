document.addEventListener("DOMContentLoaded", function(event) { 
  document.getElementById('navGoesHere').innerHTML = `
  <nav class="navbar is-primary has-text-white" id='nav'>
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item has-text-weight-bold is-uppercase" href="index.html">
          Carolina Barbell
        </a>
        <span class="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>

      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
          <div class="tabs is-right">
            <ul>
              <li id='index'><a href="index.html">Home</a></li>
              <li id='aboutUs'><a href="aboutUs.html">About Us</a></li>
              <li id='officers'><a href="officers.html">Officers</a></li>
              <li id='faq'><a href="faq.html">FAQ</a></li>
              <li id='photos'><a href="photos.html">Photos</a></li>
              <li id='contact'><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  `

  var element = window.location.pathname.split('/').pop().split('.')[0];
  document.getElementById(element).classList.add('is-active');

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