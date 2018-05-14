"use strict";

(function () {

    function Person(name, surname) {
        //properties
        this.name = name;
        this.surname = surname;
        //methods
    }
    Person.prototype.getData = function () {
        return this.name + " " + this.surname;
    }

    function Seat(number, category) {
        typeof number !== "number" || number == undefined ?
            this.number = parseInt(Math.random() * 100) :
            this.number = number;

        category !== "b" ?
            this.category = "e".toUpperCase() :
            this.category = category.toUpperCase();
    }
    Seat.prototype.getData = function () {
        var fullCategory;
        this.category === "B" ?
            fullCategory = "bussiness" :
            fullCategory = "economy";

        return this.number + ", " + fullCategory;
    }

    function Passenger(person, seat) {
        //checking inputs
        if (!person instanceof Person) {
            console.log("person in Passenger is not valid");
            return "person is not valid";
        }
        if (!seat instanceof Seat) {
            console.log("seat is not valid");
            return "seat not valid";
        }
        // declare properties
        this.person = person;
        this.seat = seat;
    }
    Passenger.prototype.getData = function () {
        return this.seat.getData() + ", " + this.person.getData();
    }

    function Flight(relation, date) {
        //properties
        this.relation = relation;
        this.date = new Date(date);
        this.listOfPassengers = [];
    }
    Flight.prototype.addPassenger = function (passenger) {
        //if seat taken dont add passenger
        for (var i = 0; i < this.listOfPassengers.length; i++) {
            if (passenger.seat.number === this.listOfPassengers[i].seat.number) {
                console.log("Seat already taken, passenger " + passenger.person.getData() + " not added");
                return;
            }
        }
        //check if there is more then 99 passenger
        if (this.listOfPassengers.length > 99) {
            return;
        }
        //if same name delete last entry and add new
        for (var j = 0; j < this.listOfPassengers.length; j++) {
            if (passenger.person.name === this.listOfPassengers[j].person.name &&
                passenger.person.surname === this.listOfPassengers[j].person.surname) {
                this.listOfPassengers.splice(j, 1, passenger);
                return;
            };
        }
        //add passenger
        return this.listOfPassengers.push(passenger);
    }
    Flight.prototype.addData = function () {
        //extra - finding consonants and adding them
        var splitted = this.relation.split("-");
        var from = splitted[0].toUpperCase();
        var to = splitted[splitted.length - 1].toUpperCase()
        var firstRelation = searchForConsonant(from, isConsonant);
        var secondRelation = searchForConsonant(to, isConsonant);
        var compressedRelation = firstRelation + " - " + secondRelation;
        var lastWord = splitted[splitted.length - 1].toUpperCase()
        //check if letter is consonant
        function isConsonant(letter) {
            return letter !== "A" &&
                letter !== "E" &&
                letter !== "I" &&
                letter !== "O" &&
                letter !== "U" &&
                letter !== " "
        }
        //search for all consonants and add first and last
        function searchForConsonant(word, callback) {
            var result = "";
            for (var i in word) {
                if (callback(word[i])) {
                    result += word[i];

                }
            }
            return result[0] + result[result.length - 1];
        };
        this.numberInBussiness = function () {
            var counter = 0;
            this.listOfPassengers.forEach(function (num) {
                if (num.seat.category === "B") {
                    counter++;
                }
            })
            return counter;
        }
        //construct string
        var resultStr = "\t" + this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + " " + compressedRelation + ", total in buissiness class: " + this.numberInBussiness() + "\n";
        this.listOfPassengers.forEach(function (passenger) {
            resultStr += " \t \t" + passenger.getData() + "\n";
        })
        return resultStr;
    }

    function Airport(name) {
        if (typeof name !== "string") {
            console.log("invalid Airport name input");
            return "invalid Airport name input";
        }
        this.name = name;
        this.listOfFlights = [];
    }
    Airport.prototype.addFlight = function (flight) {
        this.listOfFlights.push(flight);
    }
    Airport.prototype.totalPassengers = function () {
        var total = 0;
        this.listOfFlights.forEach(function (flight) {
            total += flight.listOfPassengers.length;
        })
        return total;
    }
    Airport.prototype.getTotalInBussines = function () {
        var total = 0;
        this.listOfFlights.forEach(function (flight) {
            total += flight.numberInBussiness();
        })
        return total;
    };
    Airport.prototype.getData = function () {
        var result = "Airport: " + this.name + ", total passengers: " + this.totalPassengers() + "\n"
        this.listOfFlights.forEach(function (flight) {
            result += flight.addData();
        })
        result += "total in bussiness class: " + this.getTotalInBussines();
        return result;
    };

    //creator functions
    function createFlight(relation, date) {
        return new Flight(relation, date);
    }

    function createPassenger(firstname, lastname, seatNumber, category) {
        var person = new Person(firstname, lastname);
        var seat = new Seat(seatNumber, category);
        return new Passenger(person, seat);
    }

    // add stuff
    var nikolaAirport = new Airport("Nikola Tesla");

    var newYork = createFlight("Belgrade-NewYork", "2018");
    var barcelona = createFlight("Barcelona-Belgrade", "9/8/2018");

    var john = createPassenger("John", "Snow", 1, "b");
    var john = createPassenger("John", "Snow", 67, "b");
    var cercei = createPassenger("Cercei", "Lannister", 1, "b");
    var daenerys = createPassenger("Daenerys", "Targeryan");
    var tyrion = createPassenger("Tyrion", "Lannister");

    newYork.addPassenger(john);
    newYork.addPassenger(cercei);
    barcelona.addPassenger(daenerys);
    barcelona.addPassenger(tyrion);

    nikolaAirport.addFlight(newYork);
    nikolaAirport.addFlight(barcelona);


    console.log(nikolaAirport.getData());

})();