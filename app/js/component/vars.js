// Bind arrows to contacts Slider
function SliderNavigation(isActive, slider) {
  if (isActive) {
    $(".js_arrow-left").click(function () {
      $(`${slider} .owl-prev`).trigger("click");
    });

    $(".js_arrow-right").click(function () {
      $(`${slider} .owl-next`).trigger("click");
    });
  } else {
    $(".js_arrow-left").unbind("click");
    $(".js_arrow-right").unbind("click");
  }
}
