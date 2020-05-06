(function ($, window, document) {
  function menuStartSection() {
    $(".js_nav-item").click(function () {
      let $this = $(this);
      // Показываем вВерхнее меню
      $(".js_header-menu").addClass("js_active");
      // Скрываем текущий экран
      $(".js_section").addClass("js_hidden");
      // Убираем js_active со всех пунктов меню
      $(".js_nav-item").removeClass("js_active");

      if ($this.is(".js_nav-portfolio")) {
        $(".js_section-portfolio").removeClass("js_hidden").addClass("js_animation-portfolio");
        $(".js_footer-navigation, .js_nav-portfolio").addClass("js_active");
        $(".js_footer-description").addClass("js_hidden");
      }

      if ($this.is(".js_nav-video")) {
        $(".js_section-video").removeClass("js_hidden").addClass("js_animation-video");
        $(".js_nav-video").addClass("js_active");

      }
    });
  }

  $(() => {
    menuStartSection();
  });
})(window.jQuery, window, document);
