"use strict";

(function () {

    function Genre(name) {
        this.name = name;
        this.getData = function () {
            const firstLetter = this.name[0].toUpperCase();
            const lastLetter = this.name[this.name.length - 1].toUpperCase();
            const acronym = `${firstLetter}${lastLetter}`;
            return acronym;
        }
    }

    function Movie(title, genre, length) {
        // if (genre instanceof Genre) {
        //     console.log(`genre is not instance of ${Genre}`)
        // }
        this.title = title;
        this.genre = new Genre(genre);
        this.length = length;
        this.getData = function () {
            return `${this.title}: ${this.length}, ${this.genre.getData()}`;
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
            const str = "";
            const day = this.date.getDate();
            const month = this.date.getMonth() + 1;
            const year = this.date.getFullYear();
            const date = day + "/" + month + "/" + year;
            const programLength = 0;
            for (let i = 0; i < 2; i++) {
                programLength = programLength + 2;
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
    let program = new Program("12/08/2018");
    const maratonci = new Movie("Maratonci", "Action", 130);
    const tesnaKoza = new Movie("Tesna Koza", "Comedy", 123);
    const kustendorf = new Festival("kustendorf");


    program.addMovie(maratonci);
    program.addMovie(tesnaKoza);

    console.log(tesnaKoza.getData());
}






























)();
