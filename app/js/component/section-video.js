(function ($, window, document) {
  // Выход из полноэкранного режима
  function cancelFullscreen() {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }

  // Play video on hover
  function playOnHover() {
    $(".js_section-video--block").on("mouseover", function () {
      var $this_video = $(this).find("video").get(0);
      $this_video.play();
    });
    $(".js_section-video--block").on("mouseleave", function () {
      var $this_video = $(this).find("video").get(0);
      $this_video.muted = true;
      $this_video.pause();
    });
    $(".js_section-video--block").on("click", function () {
      var $this_video = $(this).find("video").get(0);
      $this_video.muted = false;
      if ($this_video.requestFullscreen) {
        $this_video.requestFullscreen();
      } else if ($this_video.mozRequestFullScreen) {
        /* Firefox */
        $this_video.mozRequestFullScreen();
      } else if ($this_video.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        $this_video.webkitRequestFullscreen();
      } else if ($this_video.msRequestFullscreen) {
        /* IE/Edge */
        $this_video.msRequestFullscreen();
      }
    });
    $(".js_section-video--block").on("dblclick", function () {
      cancelFullscreen();
    });
  }

  $(() => {
    // Activate Plyr Player
    const players = Array.from(document.querySelectorAll(".js-player")).map(
      (p) => new Plyr(p)
    );
    // Play video on hover
    playOnHover();
  });
})(window.jQuery, window, document);
