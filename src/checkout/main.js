$(document).ready(function(){
  console.log('sanity');

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

var regLetter = /^[A-Za-z\s]+$/;

$('#shippingName').blur(function () {
  var bool = regLetter.test($('#shippingName').val());
    bool === true ? $(this).css("border", "2px solid green") : $(this).css("border", "2px solid red");
})

$('#shippingLastName').blur(function () {
  var bool = regLetter.test($('#shippingLastName').val());
    bool === true ? $(this).css("border", "2px solid green") : $(this).css("border", "2px solid red");
})

$('#billingName').blur(function () {
  var bool = regLetter.test($('#billingName').val());
    bool === true ? $(this).css("border", "2px solid green") : $(this).css("border", "2px solid red");
})

$('#billingLastName').blur(function () {
  var bool = regLetter.test($('#billingLastName').val());
    bool === true ? $(this).css("border", "2px solid green") : $(this).css("border", "2px solid red");
})

$('#shippingAddress1').blur(function () {
  $('#shippingAddress1').val() === '' ? $(this).css("border", "2px solid red") : $(this).css("border", "2px solid green");
})
$('#billingAddress1').blur(function () {
  $('#billingAddress1').val() === '' ? $(this).css("border", "2px solid red") : $(this).css("border", "2px solid green");
})

$('#shippingZip').blur(function () {
  console.log($('#shippingZip').val().length);
  if ($('#shippingZip').val().length < 5 || $('#shippingZip').val().length > 10) {
    $(this).css("border", "2px solid red");
  } else {
    $(this).css("border", "2px solid green");
  }
})

$('#billingZip').blur(function () {
  console.log($('#billingZip').val().length);
  if ($('#billingZip').val().length < 5 || $('#billingZip').val().length > 10) {
    $(this).css("border", "2px solid red");
  } else {
    $(this).css("border", "2px solid green");
  }
})


})
