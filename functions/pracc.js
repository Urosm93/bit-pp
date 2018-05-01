

//task 1

function isString(str) {
    if (typeof str === "string") {
        return true;
    }
    return false;
}

console.log(isString("sdfdsfs"));

// task 2

function blankstring(a) {
    if (typeof a === "string" && a === "") {

        return true;
    }
    else if (a !== "string" && a !== "") {

        return false;
    }
}

console.log(blankstring(""));

// task 3

function concatenates(str, num) {
    var res = "";
    for (var i = 1; i <= num; i++) {
        res += str;
    }
    return res;
}
console.log(concatenates("Sveska", 5));

//task 4

function numberOfLetter(str, num) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (num == str[i]) {
            counter++;
        }
    }
    return counter;
}
console.log(numberOfLetter("jasdoiasjdoajd", "j"));

// task 5

function firstOccurrence(letter, str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            return i;
        }
    }
    return -1;
}
console.log(firstOccurrence("r", "yggiyirty777"));

//task 6

function firstOccurrence(letter, str) {
    for (i = str.length; i <= str.length; i--) {
        if (str[i] === letter) {
            return i;
        }
    }
    return -1;
}
console.log(firstOccurrence("m", "olovkam"));

//task 7


function convert(str) {
    var array = [];
    for (i = 0; i < str.length; i++) {
        array[i] = str[i];
        if (array[i] == " ") {
            array[i] = null;
        }
    }
    return array;
}
console.log(convert("kr ist ina"));

// task 8

function numberparameter(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0)
            return false;
    return num !== 1;
}
console.log(numberparameter(8));

// task 9

function separator(str, sep) {

    var newString = "";

    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            newString += sep;
        } else {
            newString += str[i];
        }

    }
    return newString;
}

console.log(separator("daliradi", "-"));

//task 10

function createNewString(n, str) {

    var newString = "";

    for (var i = 0; i <= n; i++) {
        newString += str[i];
    }

    return newString + "...";
}

console.log(createNewString(5, "tastatura"));

// task 11


function filterNonNumbers(inputArray) {
    var numArray = [];

    for (var i = 0; i < inputArray.length; i++) {
        var element = inputArray[i];
        var number = parseFloat(element);

        if (!isNaN(number) && isFinite(number)) {
            numArray[numArray.length] = number;
        } 
    }
    return numArray;
}

var output = filterNonNumbers(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(output);


