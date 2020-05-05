(function ($, window, document) {
  function menuStartSection() {
    $(".js_nav-item").click(function () {
      let $this = $(this);

      // Скрываем загрузочынй экран
      $(".js_section-start").addClass("js_hidden");
      // Показываем вВерхнее меню
      $(".js_header-menu").addClass("js_active");

      if ($this.is(".js_nav-portfolio")) {
        $(".js_section-portfolio").removeClass("js_hidden");
        $(".js_footer-navigation").addClass(
          "js_active js_portfolio-navigation"
        );
        $(".js_footer-description").addClass("js_hidden");
      }
    });
  }

  $(() => {
    menuStartSection();
  });
})(window.jQuery, window, document);
