$('document').ready(function() {
  var everyProduct = [];
  var productPictures = ['http://lorempixel.com/250/250/sports/1',
  'http://lorempixel.com/250/250/sports/2',
  'http://lorempixel.com/250/250/sports/3',
  'http://lorempixel.com/250/250/nightlife/3',
  'http://lorempixel.com/250/250/sports/5',
  'http://lorempixel.com/250/250/sports/6',
  'http://lorempixel.com/250/250/sports/7',
  'http://lorempixel.com/250/250/sports/8',
  'http://lorempixel.com/250/250/sports/9',
  'http://lorempixel.com/250/250/sports/10',
  'http://lorempixel.com/250/250/nightlife/1',
  'http://lorempixel.com/250/250/nightlife/2'];
  var randomProducts = [];
  console.log('Sanity check');

     Promise.resolve($.ajax({
       url: 'http://galvanize-student-apis.herokuapp.com/gcommerce/products'
     })).then(function(products) {
        var productsClone = products.splice(0);
        var picturesClone = productPictures.splice(0);
       for (item in productsClone) {
         console.log('item', item);
         var randomPicture = randomArrayIndex(picturesClone);
         console.log('randomPicture', randomPicture);
         productsClone[item].picture = picturesClone[randomPicture];
         picturesClone.splice(randomPicture, 1);
         productsClone[item].rating = getRandomNumber(5);
         everyProduct.push(productsClone[item]);
         productsClone.splice(item, 1);
         console.log('products after splice', productsClone);
       };
    }).then(function() {
      getRandomProducts(10);
    }).then(function() {
      addProductInfoToPage(randomProducts);
    }).catch(function(error) {
      console.log(error);
    })






//All functions declared below this line.

  function getRandomProducts(number) {
    for (var i = 0; i < number; i++) {
      var everyProductClone = everyProduct.slice(0);
      var random = randomArrayIndex(everyProductClone);
      randomProducts.push(everyProduct[random]);
      everyProductClone.splice(random, 1);
    }
  }

  function randomArrayIndex(array) {
    var randomIndex = Math.floor(Math.random()*array.length);
    return randomIndex;
  }

  function getRandomNumber(ceilingNumber) {
    return Math.ceil(Math.random()*ceilingNumber);
  }

  function addProductInfoToPage(array) {
    for (item in array) {
      $('div#productInfo' + item +  ' p.description').text(array[item].description);
      $('div#productInfo' + item + ' p.price').text(array[item].price);
      $('div#productInfo' + item + ' img').attr('src', array[item].picture);
      addStarRating(array[item].rating, item);
    }
  }
  function addStarRating(numberOfStars, itemNumber) {
    var stars = [];
    for (i = 0; i < numberOfStars; i++) {
      stars[i] = '&#9734';
    }
    stars = stars.join(' ');
    $('div#productInfo' + itemNumber + ' div').append('<span>' + stars + '</span>')*numberOfStars;
  }
});
