/* You could place this code in any file you want, but the Rails convention is to add the javascript 
//  related to any ProductsController actions inside of products.js. However, all the JS files get   
// loaded on every request no matter which controller you're in, so be mindful of that.

// We use $(document).on('ready page:load', ...) in order to ensure that the entire DOM is loaded 
// before we begin selecting and setting up listeners.

// The Block of code/request is JavaScript with JQuery and AJAX

*/



//        rainforest_ajax : Infinite Scroll and Pagination


$(document).on('ready page:load', function() {
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

    $.ajax({
      url: '/products?search=' + searchValue,
      type: 'GET',
      dataType: 'html'
    }).done(function(response){
      $('#products').html(response);
    });
  });
});

/*
// Step 1 and 2
$(document).on('ready page:load', function(){

  $(window).scroll(function(){
    if ($(window).scrollTop() > $(document).height() - $(window).height() -50){
   //   return alert('Near bottom');
      console.log($('.pagination span.next').children().attr('href'));
       $.getScript($('.pagination span.next').children().attr('href'));
    }
  });
});

// Step 3: create 'index.js.erb'
// This code triggers the ProductController’s index action, passing in the correct page, and 
// expects some JavaScript to be returned. The action doesn’t currently respond to JavaScript so 
// we’ll need to add the relevant template. We’ll use a js.erb template here. 

// Step 4: 
//Trigger the window’s scroll event when the page first loads. If the user’s browser 
//window is tall enough to display all of the first page the second page of products will then 
//automatically be loaded. We should also check that we’re on the correct page before we start 
//listening to the scroll event, otherwise this code will listen for that event on every page 
//under the ProductsController. We can do this by checking that the pagination control exists 
//on the page before listening to the scroll event. With these in place the final version of 
//the code looks like this.
*/
$(document).on('ready page:load', function() {
  if ($('.pagination').length) {
    $(window).scroll(function() {
      var url = $('.pagination span.next').children().attr('href');
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $('.pagination').text("Fetching more products...");
        return $.getScript(url);
      }
    });
  }
});



/*

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




Using $.get doesn't require anything but the url, since the 'GET' request method and the data 
type we're looking for are the defaults of this function. This lets us write less code!

-----

        $.getScript()

$.getScript() is another shorthand function that you can use. Instead of using the data type 
"string" or "html", it uses "script". This means it's expecting a "script" as a response. 
Once it gets that response, it will execute the script. 
That means we no longer need to have a callback, the script acts as a callback.

EX:

$(document).on('ready page:load', function() {
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

  $.getScript('/products?search=' + searchValue);

--->
  Since $.getScript is requesting something with the data type "script", the server needs to be 
  able to respond to that data type. In order to get that to work, our controller can use 
  respond_to generate different responses for different request types.

app/controllers/products_controller.rb
Replace: if request.xhr?
          render @products

with:

respond_to do |format|
      format.html
      format.js
    end

-----
when it comes to JS responses, it looks for a view template just as it does with HTML, except it'll 
look for index.js.erb instead of index.html.erb.

j is sort for  'escape_javascript'

app/views/products/index.js.erb
Add:

$('#products').append('<%= j(render @products) %>');
$('.pagination').replaceWith('<%= j(paginate @products) %>');
$('.page-entries').html('<%= j(page_entries_info @products) %>');


*/