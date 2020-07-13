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
