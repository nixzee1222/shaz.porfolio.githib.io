// NAVBAR RESPONSIVE
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// NAVBAR COLLAPSE
function closeNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav responsive") {
    x.className = "topnav";
  }
}

// SCROLL NAVBAR CHANGE
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("topNav");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// SMOOTH SCROLL FUNCTION
function smoothScroll(target) {
  document.getElementById(target).scrollIntoView({
    behavior: "smooth",
  });
}

//SKILL PROGRESS
$(document).ready(function () {
  $(".progress-bar").each(function () {
    let progress = $(this).data("progress");
    $(this).css("--progress", progress);
  });
});

//INFINITE SCROLL
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelector(".cards-f");
  const numCards = document.querySelectorAll(".card-f").length;

  function cloneCards() {
    const firstHalf = cards.innerHTML;
    cards.innerHTML += firstHalf;
  }

  cloneCards();
});

//ANIMATIONS
window.addEventListener("scroll", function () {
  revealOnScroll("l");
  revealOnScroll("r");
  revealOnScroll("u");
  revealOnScroll("d");
});

function revealOnScroll(direction) {
  var reveals = document.querySelectorAll(".reveal-" + direction);

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active-" + direction);
    } else {
      reveals[i].classList.remove("active-" + direction);
    }
  }
}
