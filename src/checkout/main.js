$(document).ready(function(){
  console.log('sanity');
//copies shipping to billing information
  $("#sameAsBilling").on("click", function() {
    console.log($('#shippingName').val());

    $('#billingName').val($('#shippingName').val());
    $('#billingLastName').val($('#shippingLastName').val());
    $('#billingCompany').val($('#shippingCompany').val());
    $('#billingAddress1').val($('#shippingAddress1').val());
    $('#billingAddress2').val($('#shippingAddress2').val());
    $('#billingState').val($('#shippingState').val());
    $('#billingZip').val($('#shippingZip').val());
  })
//regletter allows only letters and spaces
var regLetter = /^[A-Za-z\s]+$/;

$('#shippingName').on('input', function () {
  var bool = regLetter.test($('#shippingName').val());
    bool === true ? $(this).css("border", "2px solid green") : $(this).css("border", "2px solid red") && $('#purchasebtn').attr('disabled','disabled') && $('#purchasebtn').css("opacity",".25");
})

$('#shippingLastName').on('input', function () {
  var bool = regLetter.test($('#shippingLastName').val());
    bool === true ? $(this).css("border", "2px solid green") : $(this).css("border", "2px solid red") && $('#purchasebtn').attr('disabled','disabled') && $('#purchasebtn').css("opacity",".25");
})

$('#billingName').on('input', function () {
  var bool = regLetter.test($('#billingName').val());
    bool === true ? $(this).css("border", "2px solid green") : $(this).css("border", "2px solid red")&& $('#purchasebtn').attr('disabled','disabled') && $('#purchasebtn').css("opacity",".25");
})

$('#billingLastName').on('input', function () {
  var bool = regLetter.test($('#billingLastName').val());
    bool === true ? $(this).css("border", "2px solid green") : $(this).css("border", "2px solid red")&& $('#purchasebtn').attr('disabled','disabled') && $('#purchasebtn').css("opacity",".25");
})

$('#shippingAddress1').on('input', function () {
  $('#shippingAddress1').val() === '' ? $(this).css("border", "2px solid red")&& $('#purchasebtn').attr('disabled','disabled') && $('#purchasebtn').css("opacity",".25") : $(this).css("border", "2px solid green");
})
$('#billingAddress1').on('input', function () {
  $('#billingAddress1').val() === '' ? $(this).css("border", "2px solid red")&& $('#purchasebtn').attr('disabled','disabled') && $('#purchasebtn').css("opacity",".25") : $(this).css("border", "2px solid green");
})

$('#shippingCity').on('input', function (){
  $('#shippingCity').val() === "" ? $(this).css("border", "2px solid red")&& $('#purchasebtn').attr('disabled','disabled') && $('#purchasebtn').css("opacity",".25") : $(this).css("border", "2px solid green");
})

$('#billingCity').on('input', function (){
  $('#billingCity').val() === "" ? $(this).css("border", "2px solid red") && $('#purchasebtn').attr('disabled','disabled') && $('#purchasebtn').css("opacity",".25"): $(this).css("border", "2px solid green");
})

$('#shippingZip').on('input', function () {
  if ($('#shippingZip').val().length < 5 || $('#shippingZip').val().length > 10) {
    $(this).css("border", "2px solid red")&& $('#purchasebtn').attr('disabled','disabled') && $('#purchasebtn').css("opacity",".25");
  } else {
    $(this).css("border", "2px solid green");
  }
})

$('#billingZip').on('input', function () {
  if ($('#billingZip').val().length < 5 || $('#billingZip').val().length > 10) {
    $(this).css("border", "2px solid red")&& $('#purchasebtn').attr('disabled','disabled') && $('#purchasebtn').css("opacity",".25");
  } else {
    $(this).css("border", "2px solid green");
  }
})

$('#shippingState').on('input', function () {
  console.log($('#shippingState').val());
  $('#shippingState').val() === "" ? $(this).css("border", "2px solid red")&& $('#purchasebtn').attr('disabled','disabled') && $('#purchasebtn').css("opacity",".25") : $(this).css("border", "2px solid green");

})

$('#billingState').on('input', function () {
  $('#billingState').val() === "" ? $(this).css("border", "2px solid red")&& $('#purchasebtn').attr('disabled','disabled') && $('#purchasebtn').css("opacity",".25") : $(this).css("border", "2px solid green");
})


//credit card validation

$('#ccNumber').on('input' , function() {
  var ccNumVal = $('#ccNumber').val();
  ccNumVal.length > 16 || ccNumVal.length < 16 ? $(this).css("border", "2px solid red")&& $('#purchasebtn').attr('disabled','disabled') && $('#purchasebtn').css("opacity",".25") : $(this).css("border", "2px solid green");

});

$('#ccExpiration').on('input' , function() {
  $('#ccExpiration').length === 0 ? $(this).css("border", "2px solid red")&& $('#purchasebtn').attr('disabled','disabled') && $('#purchasebtn').css("opacity",".25") : $(this).css("border", "2px solid green");

});

$('#cvc').on('input' , function() {
  $('#cvc').length === 0 ? $(this).css("border", "2px solid red")&& $('#purchasebtn').attr('disabled','disabled') && $('#purchasebtn').css("opacity",".25") : $(this).css("border", "2px solid green");
});

$('#paymentForm').submit(function(event) {
  $('#purchasebtn').attr('disabled','disabled');
  return false;
})

if(!stripe.card.validateCardNumber($('#ccNumber'.val()))) {
  error = true;
  reportError('The credit card number appears to be invalid.');
}
if (!stripe.card.validateCardNumber($('#cvc'.val()))) {
  error = true;
  reportError('The credit card cvc appears to be invalid.');
}
//the button is permanently disabled if one is red
});
