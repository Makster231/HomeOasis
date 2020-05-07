(function ($, window, document) {
  function logoNavigation() {
    $(".js_logo").click(function () {
      if ($(".js_page-project").length || $(".js_page-blog").length) {
        return location.href = "/";
      }

      // Убираем метки слайдров со стрелок
      $(".js_footer-navigation").removeClass(
        "js_navigation-portfolio  js_navigation-team js_navigation-services js_navigation-blog js_navigation-contacts  js_navigation-awards"
      );
      // убираем текст в футере / скрываем блок beautification / скрываем блок с формой услуг
      $(".footer-wrapper--awards, .footer-wrapper--services").addClass(
        "js_hidden"
      );
      // Скрываем вВерхнее меню / показываем стелки в футере
      $(".js_header-menu, .js_footer-navigation").removeClass("js_active");
      // Скрываем текущий экран
      $(".js_section").addClass("js_hidden");
      // ПОказываем начальный экран / показываем текст в футере
      $(".js_section-start, .js_footer-description").removeClass("js_hidden");
      // Убираем js_active со всех пунктов меню
      $(".js_nav-item").removeClass("js_active");
    });
  }

  $(() => {
    logoNavigation();
  });
})(window.jQuery, window, document);
