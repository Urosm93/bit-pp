"use strict";

(function () {

    function Genre(name) {
        this.name = name;
        this.getData = function (name) {
            var firstLetter = this.name[0].toUpperCase();
            var lastLetter = this.name[this.name.length - 1].toUpperCase();
            var acronym = firstLetter + lastLetter;
            return acronym;
        }
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = new Genre(genre);
        this.length = length;
        this.getData = function () {
            return this.title + ", " + this.length + ", " + this.genre.getData();
        }
    }


    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.totalNumberOfMovies = 0;
        this.addMovie = function (movie) {
            this.listOfMovies.push(movie);
            this.totalNumberOfMovies++;
        }
        this.getData = function () {
            var str = "";
            var day = this.date.getDate();
            var month = this.date.getMonth() + 1;
            var year = this.date.getFullYear();
            var date = day + "/" + month + "/" + year;
            var programLength = 0;
            for (var i = 0; i < 2; i++) {
                programLength =programLength + 2;
                return programLength;
            }
            return programLength;

        }

    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numOfMoviesInPrograms = 0;
        this.addProgram = function (program) {

            this.listOfPrograms.push(program);
            this.numOfMoviesInPrograms++;
        }
    }
    var program = new Program("12/08/2018");
    var maratonci = new Movie("Maratonci", "Action", 130);
    var tesnaKoza = new Movie("Tesna Koza", "Comedy", 123);
    var kustendorf = new Festival("kustendorf");


    program.addMovie(maratonci);
    program.addMovie(tesnaKoza);

    console.log(program.getData());
}






























)();
