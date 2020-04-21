(function($, window, document) {
  function fancyBoxInit() {
    $(".js-fancyBox").on("click", function() {
      let $this = $(this);

      if ($this.is(".is-gallery")) {
        return $.fancybox.open(
          [
            {
              src: "./images/portfolio/project/img_1.jpg"
            },
            {
              src: "./images/portfolio/project/img_2.jpg"
            },
            {
              src: "./images/portfolio/project/img_3.jpg"
            },
            {
              src: "./images/portfolio/project/img_4.jpg"
            },
            {
              src: "./images/portfolio/project/img_5.jpg"
            },
            {
              src: "./images/portfolio/project/img_6.jpg"
            }
          ],
          {
            loop: true,
            touch: false
          }
        );
      }

      if ($this.is(".is-gallery-video")) {
        setTimeout(function() {
          $(".fancybox-video").addClass("js-player");
          Array.from(document.querySelectorAll(".js-player")).map(
            p => new Plyr(p)
          );
        }, 50);
        return;
      }

      if ($this.is(".is-campaign-video-1")) {
        $.fancybox.open(
          [
            {
              src: "../../video/bg-main.mp4"
            }
          ],
          {
            loop: false,
            touch: false
          }
        );

        $(".fancybox-video").addClass("js-player");
        Array.from(document.querySelectorAll(".js-player")).map(
          p => new Plyr(p)
        );
        return;
      }

      if ($this.is(".is-campaign-video-2")) {
        $.fancybox.open(
          [
            {
              src: "../../video/bg-main.mp4"
            }
          ],
          {
            loop: false,
            touch: false
          }
        );

        $(".fancybox-video").addClass("js-player");
        Array.from(document.querySelectorAll(".js-player")).map(
          p => new Plyr(p)
        );
        return;
      }

      if ($this.is(".is-campaign-video-3")) {
        $.fancybox.open(
          [
            {
              src: "../../video/bg-main.mp4"
            }
          ],
          {
            loop: false,
            touch: false
          }
        );

        $(".fancybox-video").addClass("js-player");
        Array.from(document.querySelectorAll(".js-player")).map(
          p => new Plyr(p)
        );
        return;
      }

      if ($this.is(".is-campaign-video-4")) {
        $.fancybox.open(
          [
            {
              src: "../../video/bg-main.mp4"
            }
          ],
          {
            loop: false,
            touch: false
          }
        );

        $(".fancybox-video").addClass("js-player");
        Array.from(document.querySelectorAll(".js-player")).map(
          p => new Plyr(p)
        );
        return;
      }
    });
  }

  $(() => {
    fancyBoxInit();
  });
})(window.jQuery, window, document);
