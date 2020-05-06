(function ($, window, document) {
  // Play video on hover
  function playOnHover() {
    $(".js_section-video--block").on("mouseover", function () {
      $(this).find("video").get(0).play();
    });
    $(".js_section-video--block").on("mouseleave", function () {
      $(this).find("video").get(0).pause();
    });
  }

  function videoPlayerInit() {
    let players = document.querySelectorAll(".js-player"),
      counter = 0;

    if (!players.length) {
      return;
    }

    for (let i = 0; i < players.length; i++) {
      new Plyr(players[i]);
    }
  }

  $(() => {
    // Activate Plyr Player
    videoPlayerInit();
    // Play video on hover
    playOnHover();
  });
})(window.jQuery, window, document);
