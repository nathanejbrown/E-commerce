$(document).ready(function() {
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
})

function wrapper(id) {
    id.on('input', function() {
        skeleton(id);
        console.log(id);
    })
};

function skeleton(id) {
    id.val().length > 0 ? success() : bigFail();
    console.log(id.val());

    function success() {
        $(id).css("border", "2px solid green")
        $('#purchasebtn').removeAttr('disabled');
        $('#purchasebtn').css("opacity", "1")
        console.log(id);
    }

    function bigFail() {
        $(id).css("border", "2px solid red")
        $('#purchasebtn').attr('disabled', 'disabled');
        $('#purchasebtn').css("opacity", ".25");
        console.log(2);
    }
};

wrapper($('#shippingName'))
wrapper($('#shippingLastName'))
wrapper($('#shippingAddress1'))
wrapper($('#billingName'))
wrapper($('#billingLastName'))
wrapper($('#shippingZip'))
wrapper($('#billingZip'))
wrapper($('#cvc'))
wrapper($('#shippingState'))
wrapper($('#billingState'))


$('#shippingState').on('input', function() {
    $('#shippingState').val() === "" ? bigFail() : success();
    console.log($('#shippingState').val());

})




//regletter allows only letters and spaces
var regLetter = /^[A-Za-z\s]+$/;

// $('#shippingName').on('input', function () {
//   var bool = regLetter.test($('#shippingName').val());
//     bool === true ? $(this).css("border", "2px solid green") : $(this).css("border", "2px solid red") && $('#purchasebtn').attr('disabled','disabled') && $('#purchasebtn').css("opacity",".25");
// })

// $('#shippingLastName').on('input', function() {
//     var bool = regLetter.test($('#shippingLastName').val());
//     bool === true ? $(this).css("border", "2px solid green") && $('#purchasebtn').removeAttr("disabled") : $(this).css("border", "2px solid red") && $('#purchasebtn').attr('disabled', 'disabled') && $('#purchasebtn').css("opacity", ".25");
// })
//
// $('#billingName').on('input', function() {
//     var bool = regLetter.test($('#billingName').val());
//     bool === true ? $(this).css("border", "2px solid green") : $(this).css("border", "2px solid red") && $('#purchasebtn').attr('disabled', 'disabled') && $('#purchasebtn').css("opacity", ".25");
// })
//
// $('#billingLastName').on('input', function() {
//     var bool = regLetter.test($('#billingLastName').val());
//     bool === true ? $(this).css("border", "2px solid green") : $(this).css("border", "2px solid red") && $('#purchasebtn').attr('disabled', 'disabled') && $('#purchasebtn').css("opacity", ".25");
// })
//
// $('#shippingAddress1').on('input', function() {
//     $('#shippingAddress1').val() === '' ? $(this).css("border", "2px solid red") && $('#purchasebtn').attr('disabled', 'disabled') && $('#purchasebtn').css("opacity", ".25") : $(this).css("border", "2px solid green");
// })
// $('#billingAddress1').on('input', function() {
//     $('#billingAddress1').val() === '' ? $(this).css("border", "2px solid red") && $('#purchasebtn').attr('disabled', 'disabled') && $('#purchasebtn').css("opacity", ".25") : $(this).css("border", "2px solid green");
// })
//
// $('#shippingCity').on('input', function() {
//     $('#shippingCity').val() === "" ? $(this).css("border", "2px solid red") && $('#purchasebtn').attr('disabled', 'disabled') && $('#purchasebtn').css("opacity", ".25") : $(this).css("border", "2px solid green");
// })
//
// $('#billingCity').on('input', function() {
//     $('#billingCity').val() === "" ? $(this).css("border", "2px solid red") && $('#purchasebtn').attr('disabled', 'disabled') && $('#purchasebtn').css("opacity", ".25") : $(this).css("border", "2px solid green");
// })

$('#shippingZip').on('input', function() {
    if ($('#shippingZip').val().length < 5 || $('#shippingZip').val().length > 10) {
        $(this).css("border", "2px solid red") && $('#purchasebtn').attr('disabled', 'disabled') && $('#purchasebtn').css("opacity", ".25");
    } else {
        $(this).css("border", "2px solid green");
    }
})

$('#billingZip').on('input', function() {
    if ($('#billingZip').val().length < 5 || $('#billingZip').val().length > 10) {
        $(this).css("border", "2px solid red") && $('#purchasebtn').attr('disabled', 'disabled') && $('#purchasebtn').css("opacity", ".25");
    } else {
        $(this).css("border", "2px solid green");
    }
})

// $('#shippingState').on('input', function() {
//     console.log($('#shippingState').val());
//     $('#shippingState').val() === "" ? $(this).css("border", "2px solid red") && $('#purchasebtn').attr('disabled', 'disabled') && $('#purchasebtn').css("opacity", ".25") : $(this).css("border", "2px solid green") && $(this).removeAttr('disabled');
//
// })

// $('#billingState').on('input', function() {
//     $('#billingState').val() === "" ? $(this).css("border", "2px solid red") && $('#purchasebtn').attr('disabled', 'disabled') && $('#purchasebtn').css("opacity", ".25") : $(this).css("border", "2px solid green");
// })


//credit card validation

$('#ccNumber').on('input', function() {

    var ccNumVal = $('#ccNumber').val();
    ccNumVal.length > 16 || ccNumVal.length < 16 ? $(this).css("border", "2px solid red") && $('#purchasebtn').attr('disabled', 'disabled') && $('#purchasebtn').css("opacity", ".25") : $(this).css("border", "2px solid green") && $('#purchasebtn').removeAttr("disabled") && $('#purchasebtn').css("opacity", "1");

});

$('#ccExpiration').on('input', function() {

    $('#ccExpiration').length === 0 ? $(this).css("border", "2px solid red") && $('#purchasebtn').attr('disabled', 'disabled') && $('#purchasebtn').css("opacity", ".25") : $(this).css("border", "2px solid green") && $('#purchasebtn').removeAttr("disabled") && $('#purchasebtn').css("opacity", "1");

});

$('#cvc').on('input', function() {

    $('#cvc').length === 0 ? $(this).css("border", "2px solid red") && $('#purchasebtn').attr('disabled', 'disabled') && $('#purchasebtn').css("opacity", ".25") : $(this).css("border", "2px solid green")
    $('#purchasebtn').removeAttr("disabled");;




    Promise.resolve($.ajax({
        url: 'http://galvanize-student-apis.herokuapp.com/gcommerce/products'
      })).then(function(products) {
        products.forEach(function(product, index) {
          product.picture = productPictures[index];
          product.rating = getRandomNumber(5);
          everyProduct.push(product);
        });
        price(everyProduct);
        size(everyProduct);
      }).then(function() {
        var sales = getAnyNumberOfProducts(3);
        var items = getAnyNumberOfProducts(10);
        addProductInfoToPage(items);
        addSaleItems(sales);
      }).catch(function(error) {
        console.log(error);
      });

function addSaleItems(array) {
  for (var item in array) {
    var stars = makeSomeStars(array[item].rating);
    $('#saleItems').append('<img class="sale" src="' + array[item].picture + '"><span class="rating toRight">' + stars + '</span><br>');
  }
}
function initialize() {
    var mapProp = {
      center: new google.maps.LatLng(39.733513, -104.992588),
      zoom:14,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('googleMap'),mapProp);
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(39.733513, -104.992588),
      map: map
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);

  function makeSomeStars(num) {
    var stars = [];
    for (i = 0; i < num; i++) {
      stars[i] = '&#9734';
    }
    stars = stars.join(' ');
    return stars;
  }

});
// function validate(){
//   if($(this).css("border") === '2px solid rgb(255, 0, 0)') {
//     $('#purchasebtn').removeAttr('disabled')
//     $('#purchasebtn').css("opacity","1")
//       }
// }
