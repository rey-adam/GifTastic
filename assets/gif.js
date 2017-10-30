// apiKey
// wpcti61gVVsZVscWNonebhBb7euepWEN


// Initial array of movies
var movies = ["Deadpool", "Moana", "Fantastic Beasts", "Get Out"];



// displayMovieInfo function re-renders the HTML to display the appropriate content
      function displayMovieInfo() {
        var movie = $("#movie-input").val();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        movie + "&api_key=wpcti61gVVsZVscWNonebhBb7euepWEN&limit=10";
        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	console.log(response);
      
      	//code to get GIFS go here to show on the page 

        });
      }


//MISSING 
// TO MAKE THE GIFS PAUSE AND PLAY 







// Function for displaying movie data
function renderButtons() {

    // Delete the content inside the allMovies div prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)

    // this will loop through the movies in the array and it will generate invividual buttons for each movie in the array loop

    $("#allMovies").empty();
    for (var i = 0; i < movies.length; i++) {
        var btn = $("<button>");
        btn.text(movies[i]);
        $("#allMovies").append(btn)

    }

}

// when search is clicked this function runs 
$("#addMovie").on("click", function(event) {

    event.preventDefault();

    //users movie search appers on the screen 
    var movieTitle = $("#movie-input").val();
    movies.push(movieTitle);


    // function to render the list of movie buttons
    renderButtons();
});

  // Adding a click event listener to all elements with a class of "movie"
      $(document).on("click", ".movie", displayMovieInfo);

// the initial list of movies will show upon opening the web app 
renderButtons();


