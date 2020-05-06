(function ($, window, document) {
  function checkIsItBlogPage() {
    // Меняем цвет фона на белый
    $("body").addClass("bg-color--white");
    // Показываем вВерхнее меню
    $(".js_header-menu").addClass("js_active");
    // Убираем js_active со всех пунктов меню
    $(".js_nav-item").removeClass("js_active");
    // Показываем стрелки, добавляем класс пункту меню
    $(".js_footer-navigation, .js_nav-blog").addClass("js_active");
    // убираем текст в футере
    $(".js_footer-description").addClass("js_hidden");
    // добавляем стрелкам метку для слайдера
    $(".js_footer-navigation").addClass("js_navigation-blog--page");
  }
  $(() => {
    if ($(".js_blog-page").length) {
      checkIsItBlogPage();
    }
  });
})(window.jQuery, window, document);
