(function ($, window, document) {
  function CheckLocationPages(event) {
    if (
      $(location).attr("href") !== $(location).attr("href").split("/")[2] &&
      locationURL.match(pagesUrlRegex.portfolio)
    ) {
      $(location).attr("href", "./");
      event.preventdefault();
    }
  }
  function checkNavItem() {
    $(".nav-list li").click(function () {
      // changed menu list
      $(".nav-list").addClass("js-dotted-menu js_animation-wave");
      // added active to menu list items
      let $this = $(this);
      $(".nav-list .js-active").removeClass("js-active");
      $this.addClass("js-active");
      // remove display:none from sections
      $(".js-auto-heigth").removeClass("d-none");
      // show header title
      $(".js-header-title").addClass("nav-animation-show");

      if ($(".section-services-form").hasClass("js-active")) {
        $(".section-services-breadCrumbs").addClass("js-active");
        $(".section-animation-block, .section-services-form").removeClass(
          "js-active"
        );
      }

      // CheckLocationPages();

      // Click on portfolio point
      if ($this.is(".js-is-portfolio")) {
        $titles_block.html("<span>" + titles.portfolio + "</span>");
        $main_page.attr("data-role", dataRole.portfolio);
        $(".js-section-portfolio").removeClass("is-hidden");
      } else {
        $(".js-section-portfolio").addClass("is-hidden");
      }

      if ($this.is(".js-is-video")) {
        $titles_block.html("<span>" + titles.campaignVideo + "</span>");
        $main_page.attr("data-role", dataRole.campaignVideo);
        $(".js-section-video").removeClass("is-hidden");
      } else {
        $(".js-section-video").addClass("is-hidden");
      }

      if ($this.is(".js-is-awards")) {
        $titles_block.html("<span>" + titles.awards + "</span>");
        $main_page.attr("data-role", dataRole.awards);
        $(".js-section-awards").removeClass("is-hidden");
      } else {
        $(".js-section-awards").addClass("is-hidden");
      }

      if ($this.is(".js-is-team")) {
        $titles_block.html("<span>" + titles.team + "</span>");
        $main_page.attr("data-role", dataRole.team);
        $(".js-section-team").removeClass("is-hidden");
      } else {
        $(".js-section-team").addClass("is-hidden");
      }

      // Click on services point
      if ($this.is(".js-is-services")) {
        $titles_block.html("<span>" + titles.services + "</span>");
        $main_page.attr("data-role", dataRole.services);
        $(".js-section-services").removeClass("is-hidden");

        if (!$(".js-services-slider-1").hasClass("slick-initialized")) {
          servicesSlider1();
        }

        $(
          ".section-services-content, .js-service-design-block, .js-service-design, .section-services-breadCrumbs"
        ).addClass("js-active");
        servicesNavPosition();
      } else {
        $(
          ".section-services-content, .js-service-design-block, .section-services-breadCrumbs, .js-service-Landscaping-block, .js-service-Landscaping, .js-service-design-block"
        ).removeClass("js-active");
        $(".js-section-services").addClass("is-hidden");

        if ($(".js-services-slider-1").hasClass("slick-initialized")) {
          $(".js-services-slider-1").slick("unslick");
        } else if ($(".js-services-slider-2").hasClass("slick-initialized")) {
          $(".js-services-slider-2").slick("unslick");
        }
      }

      if ($this.is(".js-is-blog")) {
        $titles_block.html("<span>" + titles.blog + "</span>");
        $main_page.attr("data-role", dataRole.blog);
        $(".js-section-blog").removeClass("is-hidden");
      } else {
        $(".js-section-blog").addClass("is-hidden");
      }

      if ($this.is(".js-is-contacts")) {
        $titles_block.html("<span>" + titles.contacts + "</span>");
        $main_page.attr("data-role", dataRole.contacts);
        $(".particles-js").addClass("js_bg-transparent");

        $(".js-section-contacts")
          .addClass("js-active")
          .removeClass("is-hidden");

        $(".footer-data").html(`
          <div class="bg-slider-arrows">
            <div class="slider-arrow js-contact-slider-btn js-prev"></div>
            <div class="slider-arrow js-contact-slider-btn js-next"></div>
          </div>
        `);

        $(".js-prev").click(function () {
          $(".owl-prev").trigger("click");
        });

        $(".js-next").click(function () {
          $(".owl-next").trigger("click");
        });
      } else {
        $(".particles-js").removeClass("js_bg-transparent");

        $(".js-section-contacts")
          .addClass("is-hidden")
          .removeClass("js-active");
        $(".footer-data").html($footer_data);
      }
    });
  }

  function windowResize() {
    $(window).resize(function () {
      servicesNavPosition();

      let height =
        $(window).outerHeight() -
        ($(".header").outerHeight() + $(".footer").outerHeight());
      $(".js-auto-heigth").css("height", height + "px");
    });
  }

  function logoClick() {
    $(".js-logo").click(function (e) {
      $(".footer-data").html($footer_data);
      $(".particles-js").addClass("js_bg-transparent");
      // if !== main page - redirect
      CheckLocationPages(e);
      // remove display:none from sections
      $(".js-auto-heigth").addClass("d-none");
      // remove dotted menu list
      $(".nav-list").removeClass("js-dotted-menu js_animation-wave");
      // remove active class from menu list items
      $(".nav-list .js-active").removeClass("js-active");
      // Clear title and data-role
      $titles_block.html(titles.main);
      $main_page.attr("data-role", dataRole.main);
      // Clear service blocks
      $(
        ".section-services-content, .js-service-design-block, .section-services-breadCrumbs"
      ).removeClass("js-active");
    });
  }

  function checkLocation() {
    if (locationURL.match(pagesUrlRegex.portfolio)) {
      $(".js-is-portfolio").addClass("js-active");
      $titles_block.html(titles.portfolio);
      $main_page.attr("data-role", dataRole.portfolio);
      $(".js-section-portfolio").removeClass("is-hidden");
    }

    if (
      locationURL.match(pagesUrlRegex.portfolio_page_political_page) ||
      locationURL.match(pagesUrlRegex.portfolio_page_private_page)
    ) {
      $titles_block.text("Благоустройство п. Шугозеро");
    }
  }

  function servicesBreadCrumbs() {
    $(".js-services-tab").click(function () {
      let $this = $(this);
      $(".js-services-tab").removeClass("js-active");
      $this.addClass("js-active");

      if ($this.is(".js-service-Landscaping")) {
        $(".main-page").addClass("js-animation-services-stop");

        if ($(".js-service-Landscaping-block").hasClass("js-active")) {
          return;
        }

        $(".js-service-design-block").removeClass("js-active");
        $(".js-service-Landscaping-block").addClass("js-active");

        $(".js-services-slider-1").slick("unslick");
        servicesSlider2();
      } else {
        if ($(".js-service-design-block").hasClass("js-active")) {
          return;
        }

        $(".js-service-Landscaping-block").removeClass("js-active");
        $(".js-service-design-block").addClass("js-active");

        $(".js-services-slider-2").slick("unslick");
        servicesSlider1();
      }
    });
  }

  function servicesDiscussProject() {
    $(".js-service-discuss").click(function () {
      $(".content-block, .section-services-breadCrumbs").removeClass(
        "js-active"
      );
      $(".section-animation-block").addClass("js-active");
      $(".section-services-form").addClass("js-active");
      $("#particles-js").addClass("js-active");
      $titles_block.html("<span> Обсудим ваш проект? </span>");
    });
  }

  $(() => {
    checkNavItem();
    windowResize();
    logoClick();

    awardsSlider();

    checkLocation();

    servicesBreadCrumbs();
    servicesDiscussProject();

    contactsBgSlider();

    if (
      $(".portfolio-page-project").length ||
      $(".portfolio-page").length ||
      $(".blog-page").length
    ) {
      $(".particles-js").removeClass("js_bg-transparent");
    } else {
      $(".particles-js").addClass("js_bg-transparent");
    }

    if ($(".portfolio-page-project").length) {
      projectPageSlider();

      $(".js-project-prev").click(function () {
        $(".owl-prev").trigger("click");
      });

      $(".js-project-next").click(function () {
        $(".owl-next").trigger("click");
      });
    }

    if ($(".blog-page").length) {
      blogPageSlider();

      $(".js-blog-prev").click(function () {
        $(".owl-prev").trigger("click");
      });

      $(".js-blog-next").click(function () {
        $(".owl-next").trigger("click");
      });
    }

    $(".js-auto-heigth").css("height", height + "px");
  });
})(window.jQuery, window, document);
