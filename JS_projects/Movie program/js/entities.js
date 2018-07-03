function Festival() {
    this.listOfAllMovies = [];
    this.listOfAllPrograms = [];
}

function Movie(name, duration, genre) {
    this.name = name;
    this.duration = parseInt(duration);
    this.genre = genre;
}
Movie.prototype.getLetters = function () {
    var firstLetter = this.genre[0].toUpperCase();
    var lastLetter = this.genre[this.genre.length - 1].toUpperCase();
    return firstLetter + lastLetter;
}

Movie.prototype.getData = function () {
    return this.name + " " + this.duration + " " + this.getLetters();
}

function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
}

Program.prototype.lengthOfAllMovies = function () {
    var sumOfMovies = 0;
    this.listOfMovies.forEach(function (item) {
        sumOfMovies += item.length;
    });
    return sumOfMovies;
}

Program.prototype.addMovie = function (movie) {
    if (!movie || !(movie instanceof Movie)) {
        console.log("Invalid input!!!");
        return;
    }
    this.listOfMovies.push(movie);
};

Program.prototype.getTotalMovies = function () {
    return this.listOfMovies.length;
};

Program.prototype.getData = function () {
    var day = this.date.getDate();
    var month = this.date.getMonth() + 1;
    var year = this.date.getFullYear();
    var date = day + "." + month + "." + year;
    var resultStr = date;

    if (this.getTotalMovies() === 0) {
        resultStr += ", Program to be announced."
    }
    resultStr += "," + this.getTotalMovies() + "movies ," + "duration." + this.lengthOfAllMovies() + "mins.";
    return resultStr;
}