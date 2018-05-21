

function createMovie() {
    var titleInput = document.querySelector("#movie-title");
    var lengthInput = document.querySelector("#movie-length");
    var genreSelect = document.querySelector("#movie-genre");
    var movieElement = document.querySelector(".movie-list");
    var errorElement = document.querySelector(".error");
    var selectMovie = document.querySelector("#movie-select");

    var title = titleInput.value;
    var length = lengthInput.value;
    var genre = genreSelect.value;

    if(!title) {
        errorElement.innerHTML = "<p>Title input is missing.</p>";
        titleInput.classList.add("invalidInput");
        return;
    }
    if(!length) {
        errorElement.innerHTML = "<p>Length input is missing.</p>"; 
        lengthInput.classList.add("invalidInput");
        return;
    }
    lengthInput.classList.remove("invalidInput");
    titleInput.classList.remove("invalidInput");


    var newGenre = new Genre (genre);

    var movie = new Movie (title, length, newGenre);

    listOfMovies.push(movie);

    
    selectMovie.innerHTML += "<option>"+title+"</option>";

    var movieLi = document.createElement("li");
    var movieContent = document.createTextNode(movie.getData());
    movieLi.appendChild(movieContent);
    movieElement.appendChild(movieLi);

    titleInput.value = "";
    lengthInput.value = "";
    genreSelect.value = "-";

    errorElement.innerHTML = "";  
    
}


function createProgram() {
    var dateInput = document.querySelector("#date");
    var programElement = document.querySelector(".program-list");

    var date = dateInput.value;

    var program = new Program (date);
    console.log(program);
    

    programElement.innerHTML = date + ", " + program.listOfMovies.length + " movies, duration: " + program.lengthOfAllMovies();
}