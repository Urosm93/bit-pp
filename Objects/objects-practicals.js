var ja = {
    name: "Slon",
    age: 28,
    job: "Glumac",
    isBold: true,
    hobbies: ["running", "books", "hip-hop", "photography"],
    hiperventilira: function () {
        return ja.name + " hiperventilira";
    },
    haveFun: function () {
        for (var i = 0; i < ja.hobbies.length; i++) {
            console.log(ja.hobbies[i]);
        }
    }
}

console.log(ja.hiperventilira());

ja.haveFun();

var djora = {
    name: "Milos",
    age: 31,
    job: "student",
    favoritesMovies: ["DADA", "AADD", "WEWE"],
    something: function () {
        return djora.name + " je " + djora.job;
    },
    haveFun: function () {
        for (var i = 0; i < djora.favoritesMovies.length; i++) {
            console.log(djora.favoritesMovies[i]);
        }
    }
}


console.log(djora.something());

djora.haveFun();

var house = {
    color: "yellow",
    roomNum: 4,
    neighbourhood: "Zvezdara",
    isSold: false,
    sell: function () {
        house.isSold = true;
        return "This house has been sold successfully";
    }
}

var shoes = {
    gender: ["Male", "Female"],
    size: 43,
    isSold: false,
    color: "brown",
    order: function () {
        shoes.isSold = true;
        console.log("You just ordered a new shoes for you");
    }
}
shoes.order();

// task 1

var favoriteCoffee = {
    name: "arabica",
    strength: "strong",
    flavour: "citrus",
    milk: false,
    sugar: false
}

// task 2

var favoriteMovie = {
    tittle: "Forest Gump",
    actors: "Tom Henks",
    director: "Robert Zemeckis",
    genre: "Drama",
    popularity: 8.8
}

// task 3

function getProgram(desc, lang, git) {
    var program = {
        description: desc,
        language: lang,
        gitRep: git,
        status: false,
        printGit: function () {
            console.log(program.gitRep);
        },
        isJavaScript: function () {
            if (program.language === "JavaScript") {
                return true;
            }
            return false;
        },
        isCompleted: function(){
            return status;
       } 
    }
    return program;
}

// task 4


function getRecipe(name, type, complex, list, time) {
    var recipe = {
        name: name,
        typeOfCousine: type,
        complexity: complex,
        ingredientsList: list,
        preparingTime: time,
        prepInst: "",
        printIngrediants: function () {
            for(var i = 0; i < recipe.ingredientsList.length; i++){
                console.log(recipe.ingredientsList[i]);
            }
        },
        isEasy: function(){
            if(recipe.preparingTime <= 15){
                return true;
            }
            return false;
        },
        changeCousine: function(newType){
            recipe.typeOfCousine = newType;
        },
        removeIngrediant: function(ingrediant){
            for(var i = 0; i < recipe.ingredientsList.length; i++){
                if (recipe.ingredientsList[i] === ingrediant){
                    delete recipe.ingredientsList[i];
                }
            }
        }
    }
    return recipe;
}


var list = ['kupus','brasno','jabuke','vino'];
var pekinskaPatka = getRecipe("Pekinska patka", "Kineska", 5, list, 14);

console.log(pekinskaPatka);

pekinskaPatka.printIngrediants();

pekinskaPatka.changeCousine('francuska');

// create a constructor function Person, and create a couple instance of Person constructor

function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.sayHello = function(){
        console.log(this.name + ": Hello!");
    }
}




var dario = new Person("Dario", "Stamenkovic", 28);

console.log(dario.prezime);

dario.sayHello();


// create a constructor function Person, and create a couple instance of Person constructor

function Engine (kw,power,type){
    this.kw = kw;
    this.power = power;
    this.type = type;
}


function Car (model, topspeed,color, engine){
    this.model = model;
    this.topspeed = topspeed;
    this.color = color;
    this.engine = engine;
    this.sound = function(){
        console.log("VUUUUUM")
    }
}
var br200 = new Engine (600, 1600, "diesel");
console.log(br200);
var mercedes = new Car ("trabant", 300, "black", br200);

console.log(mercedes);
mercedes.sound();
console.log(mercedes.engine.power);





//create book constructor function
function Author (name,surname){
    this.name = name;
    this.surname = surname;
    this.printFullName = function (){
        console.log(this.name + " " + this.surname);
    }
}


function Book (title, author,genre,publisher){
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.publisher = publisher;
        this.printTitle = function(){
            console.log(this.title);
        }
}

var ivo = new Author("ivo", "Andric");

var naDrini = new Book ("Na Drini Cuprija", ivo, "roman", "Vulkan");
console.log(naDrini);


