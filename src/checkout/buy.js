function reportError(msg) {
	// Show the error in the form:
	$('#payment-errors').text(msg).addClass('alert alert-error');
	// re-enable the submit button:
	$('#submitBtn').prop('disabled', false);
	return false;
}

// Assumes jQuery is loaded!
// Watch for the document to be ready:
$(document).ready(function() {

Stripe.setPublishableKey('pk_test_sbjF15S7ES1E4MFEHpeE6Huf')
console.log(Stripe.card.validateCVC($('#cvc')))
	// Watch for a form submission:
	$("purchasebtn").submit(function(event) {
    event.preventDefault();

Stripe.card.validateCVC($('#cvc')) ? console.log("Nice Try Scammer") : console.log("Thanks for your money!")

// if(Stripe.card.validateCVC($('#cvc')) {
//
//   window.alert("Nice Try Scammer")
// } else {
//   window.alert("Thanks for your money!")
// }









		// Flag variable:
		var error = false;

		// disable the submit button to prevent repeated clicks:
		$('#purchasebtn').attr("disabled", "disabled");

		// Get the values:
		var ccNum = $('#ccNumber').val(), cvcNum = $('#cvc').val(), expMonth = $('.card-expiry-month').val(), expYear = $('.card-expiry-year').val();

		// Validate the number:
		if (!Stripe.card.validateCardNumber(ccNum)) {
			error = true;
			reportError('The credit card number appears to be invalid.');
		}

		// Validate the CVC:
		if (!Stripe.card.validateCVC(cvcNum)) {
			error = true;
			reportError('The CVC number appears to be invalid.');
		}

		// Validate the expiration:
		// if (!Stripe.card.validateExpiry(expMonth, expYear)) {
		// 	error = true;
		// 	reportError('The expiration date appears to be invalid.');
		// }

		// Validate other form elements, if needed!

		// Check for errors:
		if (!error) {

			// Get the Stripe token:
			Stripe.card.createToken({
				number: ccNum,
				cvc: cvcNum,
				exp_month: expMonth,
				exp_year: expYear
			}, stripeResponseHandler);

		}

		// Prevent the form from submitting:
		return false;

	}); // Form submission

}); // Document ready.

// Function handles the Stripe response:
function stripeResponseHandler(status, response) {

	// Check for an error:
	if (response.error) {

		reportError(response.error.message);

	} else { // No errors, submit the form:

	  var f = $("#payment-form");

	  // Token contains id, last4, and card type:
	  var token = response['id'];

	  // Insert the token into the form so it gets submitted to the server
	  f.append("<input type='hidden' name='stripeToken' value='" + token + "' />");

	  // Submit the form:
	  f.get(0).submit();

	}

} // End of stripeResponseHandler() function.
