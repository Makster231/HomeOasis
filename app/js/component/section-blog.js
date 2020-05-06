(function ($, window, document) {
  function blogSlider() {
    $(".js_blog-slider").owlCarousel({
      items: 3,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 10000,
      smartSpeed: 1000,
      nav: true,
      navText: [
        "<span class='icon-owl icon-prev'></span>",
        "<span class='icon-owl icon-next'></span>",
      ],
    });
  }

  $(() => {
    blogSlider();
  });
})(window.jQuery, window, document);