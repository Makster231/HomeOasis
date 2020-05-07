(function ($, window, document) {
  function secondaryPagesNavigation() {
    $(".js_nav-item").click(function () {
      let $this = $(this);

      if ($this.is(".js_nav-portfolio")) {
        location.href = "/?menu=portfolio";
      }

      if ($this.is(".js_nav-video")) {
        location.href = "/?menu=video";
      }

      if ($this.is(".js_nav-awards")) {
        location.href = "/?menu=awards";
      }

      if ($this.is(".js_nav-team")) {
        location.href = "/?menu=team";
      }

      if ($this.is(".js_nav-services")) {
        location.href = "/?menu=services";
      }

      if ($this.is(".js_nav-blog")) {
        location.href = "/?menu=blog";
      }

      if ($this.is(".js_nav-contacts")) {
        location.href = "/?menu=contacts";
      }
    });
  }

  $(() => {
    if ($(".js_blog-page").length || $(".js_project-page").length) {
      secondaryPagesNavigation();
    }
  });
})(window.jQuery, window, document);
