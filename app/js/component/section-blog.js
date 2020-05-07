(function ($, window, document) {
  function blogSlider() {
    $(".js_blog-slider").owlCarousel({
      items: 3,
      loop: true,
      dots: false,
      margin: 40,
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
