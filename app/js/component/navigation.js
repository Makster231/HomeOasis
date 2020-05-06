(function ($, window, document) {
  function navigation() {
    $(".js_nav-item").click(function () {
      let $this = $(this);
      // Меняем цвет фона на белый
      $("body").removeClass("js_bg-color--white");
      // Показываем вВерхнее меню
      $(".js_header-menu").addClass("js_active");
      // Скрываем текущий экран и навигацию пункта Услуг
      $(".js_section, .js_footer-services").addClass("js_hidden");
      // Убираем js_active со всех пунктов меню
      $(".js_nav-item").removeClass("js_active");

      $(".js_footer-navigation").removeClass("js_navigation-portfolio  js_navigation-team js_navigation-services js_navigation-blog js_navigation-contacts");
      // Unbind arrows for contacts slider 
      SliderNavigation(false);



      if ($this.is(".js_nav-portfolio")) {
        // bind arrows for portfolio slider 
        SliderNavigation(true, ".js_portfolio-slider");
        // Показываем блок портфолио
        $(".js_section-portfolio").removeClass("js_hidden");
        // Показываем стрелки, добавляем класс пункту меню
        $(".js_footer-navigation, .js_nav-portfolio").addClass("js_active");
        // убираем текст в футере
        $(".js_footer-description").addClass("js_hidden");
      }

      if ($this.is(".js_nav-video")) {
        // Показываем блок Видео и показыаем текст в футере
        $(".js_section-video, .js_footer-description").removeClass("js_hidden");
        // добавляем класс пункту меню
        $(".js_nav-video").addClass("js_active");
        // Убираем стрелкам в футере 
        $(".js_footer-navigation").removeClass("js_active");
      }

      if ($this.is(".js_nav-team")) {
        // bind arrows for team slider 
        SliderNavigation(true, ".js_team-slider");
        // Показываем блок Блог
        $(".js_section-team").removeClass("js_hidden");
        // Показываем стрелки, добавляем класс пункту меню
        $(".js_footer-navigation, .js_nav-team").addClass("js_active");
        // убираем текст в футере
        $(".js_footer-description").addClass("js_hidden");
        // добавляем стрелкам метку для слайдера
        $(".js_footer-navigation").addClass("js_navigation-team");
      }


      if ($this.is(".js_nav-services")) {
        // Показываем блок Услуг
        $(".js_section-services, .js_footer-services").removeClass("js_hidden");
        // Показываем стрелки, добавляем класс пункту меню
        $(".js_footer-navigation, .js_nav-services").addClass("js_active");
        // убираем текст в футере
        $(".js_footer-description").addClass("js_hidden");
        // добавляем стрелкам метку для слайдера
        $(".js_footer-navigation").addClass("js_navigation-services");
      }


      if ($this.is(".js_nav-blog")) {
        // bind arrows for blog slider 
        SliderNavigation(true, ".js_blog-slider");
        // Показываем блок Блог
        $(".js_section-blog").removeClass("js_hidden");
        // Показываем стрелки, добавляем класс пункту меню
        $(".js_footer-navigation, .js_nav-blog").addClass("js_active");
        // убираем текст в футере
        $(".js_footer-description").addClass("js_hidden");
        // добавляем стрелкам метку для слайдера
        $(".js_footer-navigation").addClass("js_navigation-blog");
      }

      if ($this.is(".js_nav-contacts")) {
      // bind arrows for contacts slider 
        SliderNavigation(true, ".js_contacts-slider");
        // Меняем цвет фона на белый
        $("body").addClass("js_bg-color--white");
        // Показываем блок Контактов
        $(".js_section-contacts").removeClass("js_hidden");
        // Показываем стрелки, добавляем класс пункту меню
        $(".js_footer-navigation, .js_nav-contacts").addClass("js_active");
        // убираем текст в футере
        $(".js_footer-description").addClass("js_hidden");
        // добавляем стрелкам метку для слайдера
        $(".js_footer-navigation").addClass("js_navigation-contacts");
      }
    });
  }

  function logoNavigation() {
    $(".js_logo").click(function () {
      // Скрываем вВерхнее меню
      $(".js_header-menu").removeClass("js_active");
      // Скрываем текущий экран
      $(".js_section").addClass("js_hidden");
      // ПОказываем начальный экран
      $(".js_section-start").removeClass("js_hidden");
      // Убираем js_active со всех пунктов меню
      $(".js_nav-item").removeClass("js_active");
    });
  }

  $(() => {
    navigation();
    logoNavigation();
  });
})(window.jQuery, window, document);
