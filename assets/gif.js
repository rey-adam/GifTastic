// apiKey
// wpcti61gVVsZVscWNonebhBb7euepWEN

$(function(){
    populateButtons(movies, 'movieButton', '#allMovies')
    console.log("page loaded")
});

var movies = ["Deadpool", "Moana", "Fantastic Beasts", "Get Out", "Titanic", "Iron Man"];

  // function to make buttons and add to page
  function populateButtons(movies, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();

    for (var i = 0; i < movies.length; i++) {
        var a = $("<button>");
        a.addClass(classToAdd);
        a.attr("data-type", movies[i]);
        a.text(movies[i]);
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





// // Initial array of movies
// var movies = ["Deadpool", "Moana", "Fantastic Beasts", "Get Out"];



// // displayMovieInfo function re-renders the HTML to display the appropriate content
//       function displayMovieGifs() {
//         var movie = $("#movie-input").val();
//         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         movie + "&api_key=wpcti61gVVsZVscWNonebhBb7euepWEN&limit=10";
//         // var queryURL = "https://api.giphy.com/v1/gifs/search?q=titanic&api_key=wpcti61gVVsZVscWNonebhBb7euepWEN&limit=10";
//         // Creating an AJAX call for the specific movie button being clicked
//         $.ajax({
//           url: queryURL,
//           method: "GET"
//         }).done(function(response) {
//         	console.log(response);
      
//       	//code to get GIFS go here to show on the page 

//         });
//       }


// //MISSING 
// // TO MAKE THE GIFS PAUSE AND PLAY 







// // Function for displaying movie data
// function renderButtons() {

//     // Delete the content inside the allMovies div prior to adding new movies
//     // (this is necessary otherwise you will have repeat buttons)

//     // this will loop through the movies in the array and it will generate invividual buttons for each movie in the array loop

//     $("#allMovies").empty();
//     for (var i = 0; i < movies.length; i++) {
//         var btn = $("<button>");
//         btn.text(movies[i]);
//         $("#allMovies").append(btn)

//     }

// }

// // when search is clicked this function runs 
// $("#addMovie").on("click", function(event) {

//     event.preventDefault();

//     //users movie search appears on the screen 
//     var movieTitle = $("#movie-input").val();
//     movies.push(movieTitle);


//     // function to render the list of movie buttons
//     renderButtons();
// });

//   // Adding a click event listener to all elements with a class of "movie"
//       $(document).on("click", displayMovieGifs);

// // the initial list of movies will show upon opening the web app 
// renderButtons();


