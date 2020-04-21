function locationNavUtm() {
  $(".nav-list").addClass("js-dotted-menu js_animation-wave");
  // added active to menu list items
  // let $this = $(this);
  $(".nav-list .js-active").removeClass("js-active");
  // $this.addClass("js-active");
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

  if (locationUTM === "/index.html?utm=portfolio") {
    $titles_block.html("<span>" + titles.portfolio + "</span>");
    $main_page.attr("data-role", dataRole.portfolio);
    $(".js-section-portfolio").removeClass("is-hidden");
    $(".js-is-portfolio").addClass("js-active");
  }

  if (locationUTM === "/index.html?utm=video") {
    $titles_block.html("<span>" + titles.campaignVideo + "</span>");
    $main_page.attr("data-role", dataRole.campaignVideo);
    $(".js-section-video").removeClass("is-hidden");
    $(".js-is-video").addClass("js-active");
  }
  if (locationUTM === "/index.html?utm=awards") {
    $titles_block.html("<span>" + titles.awards + "</span>");
    $main_page.attr("data-role", dataRole.awards);
    $(".js-section-awards").removeClass("is-hidden");
    $(".js-is-awards").addClass("js-active");
  }

  if (locationUTM === "/index.html?utm=team") {
    $titles_block.html("<span>" + titles.team + "</span>");
    $main_page.attr("data-role", dataRole.team);
    $(".js-section-team").removeClass("is-hidden");
    $(".js-is-team").addClass("js-active");
  }

  // Click on services point
  if (locationUTM === "/index.html?utm=services") {
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

    $(".js-is-services").addClass("js-active");
  }

  if (locationUTM === "/index.html?utm=blog") {
    $titles_block.html("<span>" + titles.blog + "</span>");
    $main_page.attr("data-role", dataRole.blog);
    $(".js-section-blog").removeClass("is-hidden");
    $(".js-is-blog").addClass("js-active");
  }

  if (locationUTM === "/index.html?utm=contacts") {
    $titles_block.html("<span>" + titles.contacts + "</span>");
    $main_page.attr("data-role", dataRole.contacts);
    $(".js-section-contacts").addClass("js-active").removeClass("is-hidden");

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
    $(".js-is-contacts").addClass("js-active");
  }
}

(function ($, window, document) {
  $(".js_utm-link").click(function () {
    let $this = $(this);
    let $link_utm = $this.data("utm");
    $(location).attr("href", $link_utm);
    return;
  });

  $(() => {
    if (location.pathname !== "/") {
      locationNavUtm();
    }
  });
})(window.jQuery, window, document);
