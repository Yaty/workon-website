(function($) {
  "use strict"; // Start of use strict

  $('#register-form').submit(function() {
    $.ajax({ // create an AJAX call...
        data: $(this).serialize(), // get the form data
        type: 'POST',
        url: 'http://localhost:3000/api/accounts',
        success: function(response) { // on success..
			$(location).attr('href', './login.html')
        }
    });

    return false; // cancel original event to prevent form submitting
});

})(jQuery); // End of use strict
