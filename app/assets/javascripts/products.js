/* You could place this code in any file you want, but the Rails convention is to add the javascript 
//  related to any ProductsController actions inside of products.js. However, all the JS files get   
// loaded on every request no matter which controller you're in, so be mindful of that.

// We use $(document).on('ready page:load', ...) in order to ensure that the entire DOM is loaded 
// before we begin selecting and setting up listeners.

// The Block of code/request is JavaScript with JQuery and AJAX

*/

/*
$(document).on('ready page:load', function() {
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

    $.ajax({
      url: '/products?search=' + searchValue,
      type: 'GET',
      dataType: 'html'
    }).done(function(data){
      $('#products').html(data);
    });
  });
});

*/

// This code does the same thing as above, however with JQuery and Ajax SortHand Method

$(document).on('ready page:load', function() {
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();


    $.get('/products?search=' + searchValue)
      .done(function(data){
        console.log(data);
        $('#products').html(data);
      });
    });
  });


/*
Using $.get doesn't require anything but the url, since the 'GET' request method and the data type we're looking for are the defaults of this function. This lets us write less code!

*/
