
$(function(){
    populateButtons(moviesArray, 'movieButton', '#allMovies')
    console.log("page loaded")
});

var moviesArray = ["Deadpool", "Moana", "Fantastic Beasts", "Get Out", "Titanic", "Iron Man"];

  // function to make buttons and add to page
  function populateButtons(moviesArray, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();

    for (var i = 0; i < moviesArray.length; i++) {
        var a = $("<button>");
        a.addClass(classToAdd);
        a.attr("data-type", moviesArray[i]);
        a.text(moviesArray[i]);
        $(areaToAddTo).append(a);
      }
    }

$(document).on('click','.movieButton',function(){
  $('#allMovies').empty();
  var type = $(this).data('type');
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=wpcti61gVVsZVscWNonebhBb7euepWEN&limit=10";

  $.ajax({url:queryURL, method: 'GET'})
  .done(function(response){
    for (var i = 0; i < response.data.length; i++){
      var movieDiv = $('<div class = "movie-item">');
      var rating = response.data[i].rating;
      var p = $('<p>').text('Rating: ' +rating);
      var animated = response.data[i].images.fixed_height.url;
      var still = response.data[i].images.fixed_height_still.url;
      var image = $('<img>');
      image.attr('src',still);
      image.attr('data-still',still);
      image.attr('data-animated',animated);
      image.attr('data-state','still');
      image.addClass('searchMovie');
      movieDiv.append(p);
      movieDiv.append(image);
      $('#allMovies').append(movieDiv);
    }
  })
})

// onclick gifs to make it still and animate 
$(document).on('click', '.searchMovie', function(e){
  event.preventDefault()
  var state = $(this).attr('data-state');
  if (state === 'still'){
    $(this).attr('src', $(this).data('animated'));
    $(this).attr('data-state', 'animated');
  } else {
    $(this).attr('src', $(this).data('still'));
    $(this).attr('data-state', 'still');
  }
})

// adding a new movie to the array/list after searching for it
$('#addSearch').on('click', function(e){
  event.preventDefault();
  var newSearch = $('input').eq(0).val();

  if (newSearch.length > 2) {
  moviesArray.push(newSearch);
  }

  populateButtons(moviesArray, 'movieButton', '#allMovies');
  return false;
})