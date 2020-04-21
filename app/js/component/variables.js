const titles = {
  main: "",
  portfolio: "Портфолио",
  campaignVideo: "Видео о компании",
  awards: "Награды",
  team: "Команда",
  services: "Услуги",
  blog: "Блог",
  contacts: "Контакты",
};

const dataRole = {
  main: "",
  portfolio: "portfolio",
  campaignVideo: "campaignVideo",
  awards: "awards",
  team: "team",
  services: "services",
  blog: "blog",
  contacts: "contacts",
};

const pagesUrlRegex = {
  portfolio: /portfolio\S*/gi,
  portfolio_page_political: /portfolio-political\S*/gi,
  portfolio_page_political_page: /portfolio-political-page\S*/gi,
  portfolio_page_private_page: /portfolio-private-page\S*/gi,
};

let height =
  $(window).outerHeight() -
  ($(".header").outerHeight() + $(".footer").outerHeight());
let $titles_block = $(".js-header-title");
let $footer_data = $(".footer-data").html();
let $main_page = $(".main-page");
let locationURL = window.location.pathname.replace("/", "");
let locationUTM = location.pathname + location.search;

function servicesSlider1() {
  $(".js-services-slider-1").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 5000,
  });
}
function servicesSlider2() {
  $(".js-services-slider-2").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 5000,
  });
}

function projectPageSlider() {
  $(".js-slideShow-slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 15,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 10000,
    checkVisible: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    navText: [
      "<span class='icon-owl icon-prev'></span>",
      "<span class='icon-owl icon-next'></span>",
    ],
  });
}

function blogPageSlider() {
  $(".js-slideShow-blog").owlCarousel({
    items: 1,
    loop: true,
    margin: 15,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 10000,
    checkVisible: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    navText: [
      "<span class='icon-owl icon-prev'></span>",
      "<span class='icon-owl icon-next'></span>",
    ],
  });
}

function contactsBgSlider() {
  $(".js-bg-slider").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    smartSpeed: 1500,
    nav: true,
    navText: [
      "<span class='icon-owl icon-prev'></span>",
      "<span class='icon-owl icon-next'></span>",
    ],
  });
}

function awardsSlider() {
  $(".section-awards .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    navText: [
      "<span class='icon-owl icon-prev'></span>",
      "<span class='icon-owl icon-next'></span>",
    ],
  });
}

function servicesNavPosition() {
  let top =
    $(".js-services-slider-1").offset().top - $(window).scrollTop() + 30;

  if ($(".js-services-breadCrumbs").length) {
    $(".js-services-breadCrumbs").css({
      width: $(".js-services-content").width() + 6 + "px",
      bottom: $(window).height() - top + "px",
    });
  }
}
