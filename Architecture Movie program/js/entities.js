var listOfMovies = [];

function Movie (title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
}

Movie.prototype.getData = function () {
   
    return this.title + ", " + this.length + ", " + this.genre.getGenre(); 
}

function Genre (genre) {
    this.genre = genre;
}

Genre.prototype.getGenre = function () {
    var firstLetter = this.genre[0].toUpperCase();
    var lastLetter = this.genre[this.genre.length-1].toUpperCase();
    return firstLetter + lastLetter;
}


function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = listOfMovies;
    this.numberOfMovies = 0;
}

// Program.prototype.addMovie = function (movie) {
//     if (!movie || !(movie instanceof Movie)) {
//         console.log("Invalid movie input!");
//         return
//     }
//     listOfMovies = this.listOfMovies.push(movie);
//     this.numberOfMovies++;
//     return this.listOfMovies;
// }

Program.prototype.lengthOfAllMovies = function(){ 
    var sumOfLength = 0;
    listOfMovies.forEach(function(movie) {
    sumOfLength += movie.movieLength;
})
return sumOfLength;
};