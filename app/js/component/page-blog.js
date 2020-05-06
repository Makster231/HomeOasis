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

  function blogPageSlider() {
    $(".js_page-blog--slider").owlCarousel({
      items: 1,
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
    if ($(".js_blog-page").length) {
      checkIsItBlogPage();
      blogPageSlider();
      // bind arrows for blog slider 
      SliderNavigation(true, ".js_page-blog--slider");
    }
  });
})(window.jQuery, window, document);
