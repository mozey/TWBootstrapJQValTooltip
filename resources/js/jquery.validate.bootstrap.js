$.validator.setDefaults({
  //errorClass: "error", // Use this property to change the error class.

  // We ignore hidden elements unless they are input[type='hidden']
  ignore: ":hidden:not(input[type='hidden'])",

  errorPlacement: function(/*error, element*/) {
    return true;
  },

  highlight: function(element, errorClass, validClass) {
    var $element;
    if (element.type === 'radio') {
      $element = this.findByName(element.name);
    } else {
      $element = $(element);
    }
    $element.addClass(errorClass).removeClass(validClass);
    $element.parents("div.control-group").addClass("error");
  },

  unhighlight: function(element, errorClass, validClass) {
    var $element;
    if (element.type === 'radio') {
      $element = this.findByName(element.name);
    } else {
      $element = $(element);
    }
    $element.removeClass(errorClass).addClass(validClass);
    $element.parents("div.control-group").removeClass("error");
  },

  showErrors: function(errorMap, errorList) {
    var errorClass = this.settings.errorClass;

    $.each(this.successList, function(index, element) {
      // If we don't destroy (i.e. just hide) the tooltip
      // it might come back when we don't want it to.
      if ($(element).is(":visible")) {
        $(element).tooltip('destroy');
      } else {
        // Hidden inputs are validated. Other invisible elements are not.
        $("label[for='" + $(element).attr("name") + "']").remove();
      }
    });

    $.each(errorList, function(index, value) {
      // Sometimes we want to bind a validation rule to a hidden input.
      // The validation rule is called manually (using syntax like:
      // $("form").validate().element($("input[type='hidden'])). We do this
      // when related inputs are changed by the user, i.e. this is a form level
      // rule that depends on the value of more than one input.
      // We have to set the tooltip position to static to be displayed in order:
      // http://www.w3schools.com/cssref/pr_class_position.asp
      if (!$(value.element).is(":visible")) {
        var elementName = $(value.element).attr("name");
        if ($("label[for='" + elementName + "']").length > 0) {
          // Element already has an error message, don't insert it again.
          return;
        }

        $("<label for='" + elementName + "' class='" + errorClass + "'>" + value.message + "</label>")
          .insertAfter($(value.element));
        return;
      }

      // Default placement.
      if (!$(value.element).attr("data-placement")) {
        $(value.element).attr("data-placement", "top");
      }

      // TODO Remember non-error tooltips and re-apply when error message is destroyed?

      var tooltip = $(value.element).tooltip({
        trigger: 'focus',
        // We specify a template in order to add errorClass to the tooltip
        // container. This allows us to easily style the tooltip.
        template: '<div class="tooltip ' + errorClass + '"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        container: 'body'
      });

      // We have to reset the message if the title changes,
      // otherwise it will get stuck if the element already has a tooltip.
      var currentTitle = tooltip.data("tooltip").options.title;
      if (currentTitle !== value.message) {
        tooltip.data("tooltip").options.title = value.message;
        if ($(value.element).is(":focus")) {
          $(value.element).tooltip("show");
        }
      }

      // TODO Input sometimes loses tooltip if already focused and we repeatedly click the submit button?
//      if ($(value.element).is(":focus")) {
//        // Don't call show if tooltip is already visible - causes flicker.
//        if (!$(value.element).data("tooltip").tip().hasClass('in')) {
//          // We have to manually show the tooltip if the element already has focus.
//          $(value.element).tooltip("show");
//        }
//      }
    });

    this.defaultShowErrors();
  }
});
