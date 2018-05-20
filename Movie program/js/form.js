var festival = new Festival();

var movieButton = document.querySelector(".button");
var title = document.querySelector("#title");
var length = document.querySelector("#length");
var genre = document.querySelector("#genre");
var movieList = document.querySelector("#movie-list");
var movieSelect = document.querySelector("#movie-select");
var programSelect = document.querySelector("#program-select");
var movieError = document.querySelector("#movie-error");
var date = document.querySelector("#date");
var ProgramButton = document.querySelector("#create-program");
var programError = document.querySelector("#program-error");
var programList = document.querySelector("#program-list");
var programAddMovie = document.querySelector("#add-movie");


function createMovie() {
    var titleValue = title.value;
    var lengthValue = length.value;
    var genreValue = genre.value;

    if (!titleValue) {
        movieError.textContent = "Title is required!";
        return;
    }
    if (!lengthValue) {
        movieError.textContent = "Length is required!";
        return;
    }
    if (!genreValue) {
        movieError.textContent = "Genre is required!";
        return;
    }
    movieError.textContent = "";

    var movie = new Movie(titleValue, lengthValue, genreValue);
    var index = festival.listOfAllMovies.push(movie) - 1;

    var elementLi = document.createElement("li");
    elementLi.textContent = movie.getData();
    movieList.appendChild(elementLi);

    var optionMovie = document.createElement("option");
    optionMovie.textContent = movie.title;
    optionMovie.setAttribute("value", index);
    movieSelect.appendChild(optionMovie);

    titleValue = "";
    lengthValue = "";
    genreValue = "";
}


function createProgram(date) {
    if (!date) {
        programError.textContent = "Date required!";
        return;
    }
    var date = new Date(date)

    if (date.getTime() < Date.now()) {
        programError.textContent = "Invalid date!";
        return;
    }
    if (date.getTime() < Date.now()) {
        programError.textContent = "Invalid date!";
        return;
    }

    hasProgramWithSameDate = festival.listOfAllPrograms.some(function (program) {
        return date.getTime() === program.date.getTime();
    })
    if (hasProgramWithSameDate) {
        programError.textContent = "Already possess program with same date!";
    }
    programError.textContent = "";

    var program = new Program(date);
    var index = festival.listOfAllPrograms.push(program) - 1;

    var li = document.createElement("li");
    li.textContent = program.getData();
    programList.appendChild(li);

    var option = document.createElement("option");
    option.setAttribute("value", index);
    option.textContent = program.getData();
    programSelect.appendChild(option);
}

function addMovieToProgram() {
    var programListElements = document.querySelector("#program-list li");
    var programSelectElements = document.querySelector("#program-select option");

    var movieValue = movieSelect.value;
    var programValue = programSelect.value;

    var movie = festival.listOfAllMovies[movieValue];
    var program = festival.listOfAllPrograms[programValue];
    var ProgramData = program.getData();

    program.createMovie(movie);

    programListElements.forEach(function (li) {
        if (li.textContent === ProgramData) {
            li.textContent = program.getData();

        }
    });

    programSelectElements.forEach(function (option) {
        if (option.textContent === ProgramData) {
            option.textContent = program.getData();
        }
    });
};

movieButton.addEventListener("click", createMovie);
ProgramButton.addEventListener("click", createProgram);
programAddMovie.addEventListener("click", addMovieToProgram);