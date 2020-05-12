(function ($, window, document) {
  function navigation() {
    $(".js_nav-item").click(function () {
      let $this = $(this);
      // Показываем вВерхнее меню
      $(".js_header-menu").addClass("js_active");
      // Скрываем текущий экран / навигацию пункта Услуг / навигацию пункта наград 
      $(".js_section, .js_footer-services, .js_footer-awards").addClass("js_hidden");
      // Убираем js_active со всех пунктов меню
      $(".js_nav-item").removeClass("js_active");
      // Убираем метки слайдров со стрелок
      $(".js_footer-navigation").removeClass("js_navigation-portfolio  js_navigation-team js_navigation-services js_navigation-blog js_navigation-contacts js_navigation-awards");
      // Unbind arrows for contacts slider 
      SliderNavigation(false);



      if ($this.is(".js_nav-portfolio")) {
        // bind arrows for portfolio slider 
        SliderNavigation(true, ".js_portfolio-slider");
        // Показываем блок портфолио / удаляем класс скрывающий навигацию в футере
        $(".js_section-portfolio, .js_footer-navigation").removeClass("js_hidden");
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

      if ($this.is(".js_nav-awards")) {
        // bind arrows for awards design slider 
        SliderNavigation(true, ".js_awards-diploma--slider");
        // Показываем блок Услуг / показывает навигацию в  футере / Показываем блок diploma
        $(".js_section-awards, .js_footer-awards, .js_awards-diploma, js_footer-navigation").removeClass("js_hidden");
        // Показываем стрелки / добавляем класс пункту меню / добавляем класс навигации навигации diploma
        $(".js_footer-navigation, .js_nav-awards, .js_awards-diploma--item").addClass("js_active");
        // Удаляем класс навигации навигации thanks
        $(".js_awards-thanks--item").removeClass("js_active");
        // убираем текст в футере / скрываем блок thanks / скрываем блок с формой услуг
        $(".js_footer-description, .js_awards-thanks, .js_section-awards--form").addClass("js_hidden");
        // добавляем стрелкам метку для слайдера
        $(".js_footer-navigation").addClass("js_navigation-awards");
      }

      if ($this.is(".js_nav-team")) {
        // bind arrows for team slider 
        SliderNavigation(true, ".js_team-slider");
        // Показываем блок Блог / удаляем класс скрывающий навигацию в футере
        $(".js_section-team, .js_footer-navigation").removeClass("js_hidden");
        // Показываем стрелки, добавляем класс пункту меню
        $(".js_footer-navigation, .js_nav-team").addClass("js_active");
        // убираем текст в футере
        $(".js_footer-description").addClass("js_hidden");
        // добавляем стрелкам метку для слайдера
        $(".js_footer-navigation").addClass("js_navigation-team");
      }


      if ($this.is(".js_nav-services")) {
        // bind arrows for services design slider 
        SliderNavigation(true, ".js_services-design--slider");
        // Показываем блок Услуг / показывает навигацию в  футере / Показываем блок design
        $(".js_section-services, .js_footer-services, .js_services-design, js_footer-navigation").removeClass("js_hidden");
        // Показываем стрелки / добавляем класс пункту меню / добавляем класс навигации навигации design
        $(".js_footer-navigation, .js_nav-services, .js_services-design--item").addClass("js_active");
        // Удаляем класс навигации навигации beautification
        $(".js_services-beautification--item").removeClass("js_active");
        // убираем текст в футере / скрываем блок beautification / скрываем блок с формой услуг
        $(".js_footer-description, .js_services-beautification, .js_section-services--form").addClass("js_hidden");
        // добавляем стрелкам метку для слайдера
        $(".js_footer-navigation").addClass("js_navigation-services");
      }


      if ($this.is(".js_nav-blog")) {
        // bind arrows for blog slider 
        SliderNavigation(true, ".js_blog-slider");
        // Показываем блок Блог / удаляем класс скрывающий навигацию в футере
        $(".js_section-blog, js_footer-navigation").removeClass("js_hidden");
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
        // Показываем блок Контактов / удаляем класс скрывающий навигацию в футере
        $(".js_section-contacts, .js_footer-navigation").removeClass("js_hidden");
        // Показываем стрелки, добавляем класс пункту меню
        $(".js_footer-navigation, .js_nav-contacts").addClass("js_active");
        // убираем текст в футере
        $(".js_footer-description").addClass("js_hidden");
        // добавляем стрелкам метку для слайдера
        $(".js_footer-navigation").addClass("js_navigation-contacts");
      }
    });
  }

 

  $(() => {
    navigation();
  });
})(window.jQuery, window, document);
