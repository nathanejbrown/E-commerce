
// ***click company logo to return to homepage***

$(document).ready(function() {
  $('img.logo').click(function() {
    window.location.href = 'index.html';
  });
});

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

// **email validation**

$(document).ready(function() {
  $(document).on('click', function(e) {
    event.preventDefault();
    // if('#email-input' !)
  })
})
