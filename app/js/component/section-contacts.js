(function ($, window, document) {
  function contactsSlider() {
    $(".js_contacts-slider").owlCarousel({
      items: 1,
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
    contactsSlider();
  });
})(window.jQuery, window, document);
