(function ($, window, document) {
  function playOnHover() {
  }

  $(() => {
    playOnHover();

    // Activate Plyr Player
    const players = Array.from(document.querySelectorAll(".js_player")).map(
      (p) => new Plyr(p)
    );
  });
})(window.jQuery, window, document);
