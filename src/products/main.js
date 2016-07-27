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
      });
      if (product.length > 10) {
        product = product.slice(0, 10);
      }
      addProductInfoToPage(product);
    });
  }

// filter size
  function size(data) {
    $('.sizeB button').click(function(){
      var num = parseInt(this.value);
      var product = data.filter(function (productSize) {
        return  productSize.size === num;
      });
      if (product.length > 10) {
        product = product.slice(0, 10);
      }
      addProductInfoToPage(product);
    });
  }

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
