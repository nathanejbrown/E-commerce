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
        $('#billingCity').val($('#shippingCity').val());
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
  });

  function getRandomNumber(ceilingNumber) {
    return Math.ceil(Math.random() * ceilingNumber);
  }

$(document).ready(function (){
    var productPictures = ['http://cdn.thisiswhyimbroke.com/images/hamburger-pet-bed1-640x533.jpg',
         'http://www.ggloryind.com/image/PetBed.jpg"class="0',
         'http://g01.a.alicdn.com/kf/HTB1zzVNKVXXXXbSXXXXq6xXFXXXG/1PCS-Hot-font-b-Dog-b-font-font-b-Bed-b-font-Pet-Products-Warm-Soft.jpg',
         'http://odditymall.com/includes/content/shoe-shaped-dog-bed-thumb.jpg',
         'http://www.bingpet.com/upload/product/goods_main__1378738148.jpg',
         'http://ledies-first.ru/wp-content/uploads/2012/03/fileQKv1N.jpg.zoom_.jpg',
         'https://cmgpbpmalled.files.wordpress.com/2015/09/star-wars-captain-phasmae284a2-rope-wrap-dog-toy-12-99-image-23.jpg?w=300&h=300',
         'http://www.insidethemagic.net/wp-content/uploads/2015/08/800443980743C.jpg',
         'http://www.insidethemagic.net/wp-content/uploads/2015/08/800443980835C.jpg',
         'http://www.livbit.com/article/wp-content/uploads/2014/10/humungadogtoy_1.jpg',
         'https://www.rover.com/blog/wp-content/uploads/2015/04/r2dog2-boxer-star-wars-day.jpg',
         'http://media.gadgetsin.com/2016/03/handmade_star_wars_dog_clothes_disguise_your_pet_as_bb8_r2d2_or_c3po_1.jpg',
         'http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2015/10/Bantha-Dog.jpg',
         'http://www.smartshopperteam.com/wp-content/uploads/2016-Hot-Sale-modelling-of-Minions-micky-Dog-Costume-Novelty-Funny-Halloween-Party-Pet-Dog-Clothes-2.jpg'];

var everyProduct = []

    Promise.resolve($.ajax({
        url: 'https://galvanize-student-apis.herokuapp.com/gcommerce/products'
      })).then(function(products) {
        products.forEach(function(product, index) {
          product.picture = productPictures[index];
          product.rating = getRandomNumber(5);
          everyProduct.push(product);
        });
      }).then(function() {
        var sales = getAnyNumberOfProducts(3);
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
  console.log('hi');
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

  function getAnyNumberOfProducts(num) {
    var randomProducts = [];
    var productsClone = everyProduct.slice(0);
    for (i = 0; i < num; i++) {
      var random = getRandomNumber(productsClone.length - 1);
      randomProducts.push(productsClone[random]);
      productsClone.splice(random, 1);
    }
    return randomProducts;
  }

  function makeSomeStars(num) {
    var stars = [];
    for (i = 0; i < num; i++) {
      stars[i] = '&#9734';
    }
    stars = stars.join(' ');
    return stars;
  }

});
