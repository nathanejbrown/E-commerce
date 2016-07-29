// ***click company logo to return to homepage***

$(document).ready(function() {
  $('img.logo').click(function() {
    window.location.href = 'index.html';
  });
  $('form.email-signup').on('submit', function(e) {
      e.preventDefault();
      var email = $('#email-input').val();
      if (validateEmail(email)) {
        var $p = $('<p>' + 'Thank you! We got your info.' + '</p>');
        $('.message').empty().append($p).$p.delay(3000).fadeOut(1000);
      } else {
        var $p = $('<p>' + 'This is not valid email address.' + '</p>');
        $('.message').empty().append($p)
        $p.delay(3000).fadeOut(1000);
      }
    });

    function validateEmail(email) {
      var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      if (filter.test(email)) {
          return true;
      }
      else {
          return false;
      }
    }


//***carousel code***

carousel = (function(){

  var box = document.querySelector('.carouselbox');
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');
  var items = box.querySelectorAll('.content li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  box.classList.add('active');

    setInterval(function(){
      navigate(1)
    }, 5000)

    function navigate(direction) {
      console.log(counter)
    current.classList.remove('current');
    counter = counter + direction;
    if (direction === -1 &&
        counter < 0) {
      counter = amount - 1;
    }
    if (direction === 1 &&
        !items[counter]) {
      counter = 0;
    }
    current = items[counter];
    current.classList.add('current');
  }

  next.addEventListener('click', function(ev) {
    navigate(1);
  });
  prev.addEventListener('click', function(ev) {
    navigate(-1);
  });
  navigate(0);
})();

//***featured products***

//random assortment of pictures
var productPictures = ['http://cdn.thisiswhyimbroke.com/images/hamburger-pet-bed1-640x533.jpg',
  'http://www.ggloryind.com/image/PetBed.jpg',
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

//ajax call to get product information and random star rating
var everyProduct = [];

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
     addProductInfoToPage(getAnyNumberOfProducts(3));
     addSaleItems(sales);
   }).catch(function(error) {
     console.log(error);
   });

//function to get random products

   function getAnyNumberOfProducts(num) {
    var randomProducts = [];
    var productsClone = everyProduct.slice(0);
    for(i = 0; i < num; i++) {
      var random = getRandomNumber(productsClone.length-1);
      randomProducts.push(productsClone[random]);
      productsClone.splice(random, 1);
    }
    return randomProducts;
  }

  function addSaleItems(array) {
   for (var item in array) {
     var stars = makeSomeStars(array[item].rating);
     $('#saleItems').append('<img class="sale" src="' + array[item].picture + '"><span class="rating toRight">' + stars + '</span><br>');
   }
 }

//function to randomize the pictures
  function getRandomNumber(ceilingNumber) {
    return Math.ceil(Math.random()*ceilingNumber);
  }

//function to add the pictures and information to the featured images on homepage
  function addProductInfoToPage(array) {
    for (item in array) {
      var stars = [];
      for (i = 0; i < array[item].rating; i ++) {
        stars[i] = '&#9734';
      }
      stars = stars.join(' ');
      $('.img-featured div #item-'+item).attr('src', array[item].picture);
      $('.img-featured div #product-info-'+item).html( array[item].description + " " +array[item].price);
    }
  }
// map functionality
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
//add star functionality
  function addSaleItems(array) {
    for (var item in array) {
      var stars = makeSomeStars(array[item].rating);
      $('#saleItems').append('<img class="sale" src="' + array[item].picture + '"><span class="rating toRight">' + stars + '</span><br>');
    }
  }

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
});
