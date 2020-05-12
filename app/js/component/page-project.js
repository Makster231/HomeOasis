(function ($, window, document) {
  function checkIsItprojectPage() {
    // Показываем вВерхнее меню
    $(".js_header-menu").addClass("js_active");
    // Убираем js_active со всех пунктов меню
    $(".js_nav-item").removeClass("js_active");
    // Показываем стрелки, добавляем класс пункту меню
    $(".js_footer-navigation, .js_nav-portfolio").addClass("js_active");
    // убираем текст в футере
    $(".js_footer-description").addClass("js_hidden");
    // добавляем стрелкам метку для слайдера
    $(".js_footer-navigation").addClass("js_navigation-project--page");
  }

  function projectPageSlider() {
    $(".js_page-project--slider").owlCarousel({
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
    if ($(".js_project-page").length) {
      checkIsItprojectPage();
      projectPageSlider();
      // bind arrows for project slider 
      SliderNavigation(true, ".js_page-project--slider");
    }
  });
})(window.jQuery, window, document);
