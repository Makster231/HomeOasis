(function ($, window, document) {
  async function logoAnimation() {
    let $logoLetters_length = $(".js_logo .js_logo-animation").length / 2;

    for (let i = 0; i < $logoLetters_length; i++) {
      $(
        ".js_logo .cls-1.js_logo-animation:eq(" +
          i +
          "), .js_logo .cls-2.js_logo-animation:eq(" +
          i +
          ")"
      ).addClass("logo_letter_animation");
      await delay(900);
      $(
        ".js_logo .cls-1.js_logo-animation:eq(" +
          i +
          ") , .js_logo .cls-2.js_logo-animation:eq(" +
          i +
          ")"
      ).removeClass("logo_letter_animation");
      await delay(100);

      if ($logoLetters_length - 1 === i) {
        logoAnimation();
      }
    }
  }

  $(() => {
    logoAnimation();
  });
})(window.jQuery, window, document);
