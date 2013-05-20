#Tooltip Error Messages with JQuery Validation and Twitter Bootstrap

Displays error messages as [Twitter Bootstrap Popovers] (http://twitter.github.com/bootstrap/javascript.html#tooltips) instead of inline text.

##Usage

Include the `jquery.validate.bootstrap.js` along with the jquery validation scripts

###Basic
Display a required error message above the input:

    <input type="text" data-rule-required="true"/>

Display a required error message to the right of an input:

    <input type="text" data-rule-required="true" data-placement="right"/>

###Examples
Clone the repos and open index.html