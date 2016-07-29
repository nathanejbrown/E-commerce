<<<<<<< HEAD
$('document').ready(function() {
  var everyProduct = [];
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

  console.log('Sanity check');

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

  //All functions declared below this line.

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

  function randomArrayIndex(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
  }

  function getRandomNumber(ceilingNumber) {
    return Math.ceil(Math.random() * ceilingNumber);
  }

  function addProductInfoToPage(array) {
    $('#products').empty();
    for (var item in array) {
      var stars = makeSomeStars(array[item].rating);
      $('div#products').append('<div id="productInfo" class="row col-md-10 col-md-offset-1 productBox"><img class="col-md-3" src="' + array[item].picture + '"><div class="toRight col-md-7"><p class="description toRight">' + array[item].description + '</p>' + '<p class="price toRight">' + array[item].price + '</p>' + '<span class="rating toRight">' + stars + '</span></div>' + '</div>');
    }
  }

  function addSaleItems(array) {
    for (var item in array) {
      var stars = makeSomeStars(array[item].rating);
      $('#saleItems').append('<img class="sale" src="' + array[item].picture + '"><span class="rating toRight">' + stars + '</span><br>');
    }
  }

  function price(products) {
    $('.priceB button').click(function () {
      var num = parseInt(this.value);
      var product = products.filter(function (productPrice) {
        return productPrice.price.replace('$', '') < num;
=======
$(document).ready(function () {

// data from ajax
  function sortBy(){
    var promise = Promise.resolve($.ajax({
      url:'http://galvanize-student-apis.herokuapp.com/gcommerce/products',
      method: 'get'
    }))
    .then(function(data){
      price(data);
      size(data);
    })
  }
  sortBy();

// filter price
  function price(data) {
    $('.priceB button').click(function () {
      var num = parseInt(this.value);
      var product = data.filter(function (productPrice) {
        return productPrice.price.replace('$', '') < num
>>>>>>> master
      });
      if (product.length > 10) {
        product = product.slice(0, 10);
      }
      addProductInfoToPage(product);
    });
  }

<<<<<<< HEAD
  function size(products) {
    $('.sizeB button').click(function() {
      var num = parseInt(this.value);
      var product = products.filter(function (productSize) {
        return productSize.size === num;
=======
// filter size
  function size(data) {
    $('.sizeB button').click(function(){
      var num = parseInt(this.value);
      var product = data.filter(function (productSize) {
        return  productSize.size === num;
>>>>>>> master
      });
      if (product.length > 10) {
        product = product.slice(0, 10);
      }
      addProductInfoToPage(product);
    });
  }

<<<<<<< HEAD
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
=======
// add pic, price, description to products div
  function addProductInfoToPage(array) {
    $('#productInfo').empty();
    for (item in array) {
      $('#productInfo').append('<img>');
      $('#productInfo img').attr('src', 'http://placehold.it/250x250');
      $('#productInfo').append('<h3> ' + [item] + ' </h3>');
      $('#productInfo').append('<p class="price"> ' + array[item].price + ' </p>');
      $('#productInfo').append('<p class="description"> ' + array[item].description + ' </p>');
    }
  }

}); // end $(document).ready
>>>>>>> master
