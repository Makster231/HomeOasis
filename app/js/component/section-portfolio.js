(function ($, window, document) {
  function portfolioSlider() {
    $(".js_portfolio-slider").owlCarousel({
      items: 2,
      loop: true,
      dots: false,
      smartSpeed: 1000,
      nav: true,
      navText: [
        "<span class='icon-owl icon-prev'></span>",
        "<span class='icon-owl icon-next'></span>",
      ],
    });
  }

  $(() => {
    portfolioSlider();
  });
})(window.jQuery, window, document);
