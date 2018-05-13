(function($) {
  "use strict"; // Start of use strict

  $('#login-form').submit(function() {
    $.ajax({ // create an AJAX call...
        data: $(this).serialize(), // get the form data
        type: 'POST',
        url: 'http://localhost:3000/api/accounts/login',
        success: function(response) { // on success..
			storage.setAccessToken(response.id);
            $(location).attr('href', './dashboard/index.html')
        },
		
    });
	
    return false;
  });

})(jQuery); // End of use strict
