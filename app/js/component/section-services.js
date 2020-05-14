(function ($, window, document) {
  function servicesBeautificationSlider() {
    $(".js_services-beautification--slider").owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      smartSpeed: 1000,
      lazyLoad:true,
      nav: true,
      navText: [
        "<span class='icon-owl icon-prev'></span>",
        "<span class='icon-owl icon-next'></span>",
      ],
    });
  }

  function servicesDesignSlider() {
    $(".js_services-design--slider").owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      lazyLoad:true,
      smartSpeed: 1000,
      nav: true,
      navText: [
        "<span class='icon-owl icon-prev'></span>",
        "<span class='icon-owl icon-next'></span>",
      ],
    });
  }

  function servicesNavigation() {
    $(".js_footer-services--item").click(function () {
      let $this = $(this);
      $(".js_footer-services--item").removeClass("js_active");
      $this.addClass("js_active");
      SliderNavigation(false);

      if ($this.is(".js_services-design--item")) {
        $(".js_services-design").removeClass("js_hidden");
        $(".js_services-beautification").addClass("js_hidden");
        // bind arrows for services design slider
        SliderNavigation(true, ".js_services-design--slider");
      } else {
        $(".js_services-design").addClass("js_hidden");
        $(".js_services-beautification").removeClass("js_hidden");
        // bind arrows for services beautification slider
        SliderNavigation(true, ".js_services-beautification--slider");
      }
    });
  }

  function servicesBtnClick() {
    $(".js_footer-services--btn").click(async function () {
      // Скрываем блоки услуг , хедер , футер
      $(".js_section-services--block, .js_header, .js_footer").addClass("js_hidden");
      // Показываем анимационный текст
      $(".js_section-services--animation").removeClass("js_hidden");
      await delay(2500);
      // Скрываем анимационный текст, навигационный блок в футере , стрелки для слайдера в футере
      $(".js_section-services--animation, .js_footer-services, .js_footer-navigation").addClass("js_hidden");
      // показываем форму услуг , хедер , футер, блок описания в футере 
      $(".js_section-services--form, .js_header, .js_footer, .js_footer-description").removeClass("js_hidden");
    });
  }



  $(() => {
    servicesDesignSlider();
    servicesBeautificationSlider();
    servicesNavigation();
    servicesBtnClick();
  });
})(window.jQuery, window, document);
