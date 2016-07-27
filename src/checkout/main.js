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
})
