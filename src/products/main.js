$('document').ready(function() {
  var everyProduct = [];
  var randomProducts = [];
  var productPictures = ['http://lorempixel.com/250/250/sports/1',
  'http://lorempixel.com/250/250/sports/2',
  'http://lorempixel.com/250/250/sports/3',
  'http://lorempixel.com/250/250/sports/4',
  'http://lorempixel.com/250/250/sports/5',
  'http://lorempixel.com/250/250/sports/6',
  'http://lorempixel.com/250/250/sports/7',
  'http://lorempixel.com/250/250/sports/8',
  'http://lorempixel.com/250/250/sports/9',
  'http://lorempixel.com/250/250/sports/10',
  'http://lorempixel.com/250/250/nightlife/1',
  'http://lorempixel.com/250/250/nightlife/2'];
  console.log('Sanity check');
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: 'http://galvanize-student-apis.herokuapp.com/gcommerce/products'
    }).then(function(products) {
      products.forEach(function(item) {
        item.picture = randomArrayIndex(productPictures);
        everyProduct.push(item);
      });
    }).then(function() {
      getRandomProducts(3);
    }).then(function() {
      console.log(randomProducts);
    }).then(function() {
      addProductInfoToPage(randomProducts);
    }).fail(function(error) {
      console.log(error);
    })
  })





//All functions declared below this line.

  function getRandomProducts(number) {
    // var alreadyUsedNumbers = [];
    for (var i = 0; i < number; i++) {
      var random = randomArrayIndex(everyProduct);
      // while (alreadyUsedNumbers.indexOf(random) > -1) {
      //   random = randomArrayIndex(everyProduct);
      // }
      // alreadyUsedNumbers.push(random);
      randomProducts.push(everyProduct[random]);
    }
  }

  function randomArrayIndex(array) {
    var alreadyUsedNumbers = [];
    var randomIndex = Math.floor(Math.random()*array.length);
    while(alreadyUsedNumbers.indexOf(randomIndex) > -1) {
      var randomIndex = Math.floor(Math.random()*array.length);
    }
    alreadyUsedNumbers.push(randomIndex);
    return randomIndex;
  }

  function addProductInfoToPage(array) {
    for (item in array) {
      $('div#productInfo' + item +  ' p.description').text(array[item].description);
      $('div#productInfo' + item + ' p.price').text(array[item].price);
    }
  }

});
