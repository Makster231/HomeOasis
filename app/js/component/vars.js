function contactsSliderNavigation(isActive) {
  if (isActive) {
    $(".js_arrow-left").click(function () {
      $(".js_contacts-slider .owl-prev").trigger("click");
    });

    $(".js_arrow-right").click(function () {
      $(".js_contacts-slider .owl-next").trigger("click");
    });
  } else {
    $(".js_arrow-left").unbind("click");
    $(".js_arrow-right").unbind("click");
  }
}
