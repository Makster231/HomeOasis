(function ($, window, document) {
  async function logoAnimation() {
    let $logoLetters_length = $(".js_logo .cls-1").length;

    for (let i = 0; i < $logoLetters_length; i++) {
      $(
        ".js_logo .cls-1.js_logo-animation:eq(" +
          i +
          "), .js_logo .cls-2.js_logo-animation:eq(" +
          i +
          ")"
      ).addClass("logo_letter_animation");
      await delay(400);
      $(
        ".js_logo .cls-1.js_logo-animation:eq(" +
          i +
          ") , .js_logo .cls-2.js_logo-animation:eq(" +
          i +
          ")"
      ).removeClass("logo_letter_animation");

      if ($logoLetters_length - 1 === i) {
        logoAnimation();
      }
    }
  }

  $(() => {
    //show content after loaded page
    $("body").css("opacity", 1);
    logoAnimation();
  });
})(window.jQuery, window, document);
