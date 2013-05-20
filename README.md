#Popover Error Messages with JQuery Validation and Twitter Bootstrap

Displays error messages as [Twitter Bootstrap Popovers] (http://twitter.github.com/bootstrap/javascript.html#popovers) instead of inline text.

##Usage

Include the `jquery.validate.bootstrap.js` along with the jquery validation scripts

###Basic
Display an required error message to the right of the input:

    <input type="text" data-rule-required="true"/>

###Default Values
Using the twitter bootstrap default values:

    <input type="text" title="Error Message Title"
    	data-rule-required="true" 
        data-placement="bottom" />