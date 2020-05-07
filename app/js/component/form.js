(function ($, window, document) {
  function FullName(name) {
    return /^(([a-zA-ZÀ-ÿ`']{0,}([.]{1})?[ |.\s|`|'|-][a-zA-ZÀ-ÿ]{1,}){1,})([.]?|[']?|[`]?)[ ]?$/.test(
      name
    );
  }

  function phone(phone) {
    return /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/i.test(phone);
  }

  jQuery.validator.setDefaults({
    errorElement: "label",
    errorClass: "error",
    focusInvalid: false,

    errorPlacement: function (error, element) {
      $(element).closest(".form-group").append(error);
    },

    highlight: function (element, errorClass, validClass) {
      let fieldWrap = $(element).closest(".form-group");

      fieldWrap.addClass("has-error");
      $(element).addClass("error");
    },

    unhighlight: function (element, errorClass, validClass) {
      $(element).closest(".form-group").removeClass("has-error");
      $(element).removeClass("error");
    },
  });

  function formValidate(form) {
    form.validate({
      rules: {
        name: {
          required: true,
        },
        phone: {
          required: true,
        },
      },

      messages: {
        FullName: {
          required: "Введите Ваше Имя",
        },
        Phone: {
          required: "Введите Валидный Телефон",
        },
      },
    });
  }

  function formSubmit() {
    $(".js_services-form").on("submit", function (e) {
      e.preventDefault();
      let $form = $(this);
      let $form_btn = $(this).find("button");

      formValidate($form);

      let isValid = $form.valid();

      if (!isValid) {
        return;
      }

      $form_btn.addClass("js_loader").attr("disabled", true);

      var data = $form.serialize();

      $.ajax({
        type: "POST",
        url: "./mail.php",
        data: data,
        success: function (msg) {
          if (msg == "OK") {
            setTimeout(function () {
              $form_btn.removeClass("js_loader").attr("disabled", false);
            }, 1000);
          } else {
            alert("Произошла какая-то ошибка, пожалуйста, попробуйте позже");
            $form_btn.removeClass("js_loader").attr("disabled", false);
          }
        },
      });
    });
  }

  $(() => {
    formSubmit();
  });
})(window.jQuery, window, document);
