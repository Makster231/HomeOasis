(function ($, window, document) {
  function awardsthanksSlider() {
    $(".js_awards-thanks--slider").owlCarousel({
      items: 4,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 10000,
      smartSpeed: 1000,
      margin: 40,
      nav: true,
      navText: [
        "<span class='icon-owl icon-prev'></span>",
        "<span class='icon-owl icon-next'></span>",
      ],
    });
  }

  function awardsdiplomaSlider() {
    $(".js_awards-diploma--slider").owlCarousel({
      items: 4,
      loop: true,
      dots: false,
      autoplay: true,
      margin: 40,
      autoplayTimeout: 10000,
      smartSpeed: 1000,
      nav: true,
      navText: [
        "<span class='icon-owl icon-prev'></span>",
        "<span class='icon-owl icon-next'></span>",
      ],
    });
  }

  function awardsNavigation() {
    $(".js_footer-awards--item").click(function () {
      let $this = $(this);
      $(".js_footer-awards--item").removeClass("js_active");
      $this.addClass("js_active");
      SliderNavigation(false);

      if ($this.is(".js_awards-diploma--item")) {
        $(".js_awards-diploma").removeClass("js_hidden");
        $(".js_awards-thanks").addClass("js_hidden");
        // bind arrows for awards diploma slider
        SliderNavigation(true, ".js_awards-diploma--slider");
      } else {
        $(".js_awards-diploma").addClass("js_hidden");
        $(".js_awards-thanks").removeClass("js_hidden");
        // bind arrows for awards thanks slider
        SliderNavigation(true, ".js_awards-thanks--slider");
      }
    });
  }

  $(() => {
    awardsdiplomaSlider();
    awardsthanksSlider();
    awardsNavigation();
  });
})(window.jQuery, window, document);
