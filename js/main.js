$(document).ready(function() {

/* Hide Navbar on landing */
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 50 ) {
      $("#navbar").slideDown(700);
    } else {
      $("#navbar").slideUp(700);
    }
  });

const chartWrapper = document.querySelector(".chart-wrapper");
const scrollDown = document.querySelector(".scroll-down");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener("scroll", scrollHandler);

function scrollHandler() {
  window.pageYOffset > 0
    ? scrollDown.classList.add("is-hidden")
    : scrollDown.classList.remove("is-hidden");
  if (isElementInViewport(chartWrapper)) chartWrapper.classList.add("in-view");
}

  /*Smooth scroll between elements */

  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  var typed = $("#typed");

  $(function() {
    typed.typed({
      strings: ["Yash Arora.", "An Engineer.", "A Developer.", "An Innovator."],
      typeSpeed: 100,
      loop: true,
    });
  });


});
