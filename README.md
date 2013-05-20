##Tooltip Error Messages with JQuery Validation and Twitter Bootstrap

Displays error messages as [Twitter Bootstrap Tooltips] (http://twitter.github.com/bootstrap/javascript.html#tooltips) instead of inline text.

##Why Use Tooltip and not a Popover?

1. Error message usually have some text only, not a title and a body.

2. Validating multiple elements at once may cause overlapping popovers, obscuring the form and confusing the user. When using tooltips only the focused elements error message is shown.

##Prefer using a Popover

Use this instead: [TWBootstrapJQValPopover] (https://github.com/mozey/TWBootstrapJQValPopover)

##Usage

Include the `jquery.validate.bootstrap.js` along with the jquery validation scripts

Display a required error message above the input:

    <input type="text" data-rule-required="true"/>

Display a required error message to the right of an input:

    <input type="text" data-rule-required="true" data-placement="right"/>

##Examples

Clone the repos and open index.html

##TODO

Rewrite the code so you can choose between a popover and tooltip.