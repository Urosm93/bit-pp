//task 1

function convertNumberRadix(string,baseInput,baseOutput){
    var number = parseInt(string,baseInput);
    var convertedNum = number.toString(baseOutput);
    return convertedNum;
}

console.log(convertNumberRadix("25",10,2));

//task 2

function reverseNumber(num){
    var string = num.toString();
    return parseInt(string.split("").reverse().join(""));
}

console.log(reverseNumber(12345));

//task 3

function sortLetters(string) {
    return string.toLowerCase().split("").sort().join("");
}

console.log(sortLetters("Webmaster"));

//task 4
function rearrangingLetters(sentance){
    var arrOfWords = sentance.split(" ");
    for (var i = 0; i<arrOfWords.length; i++) {
        arrOfWords[i] = arrOfWords[i].split("").sort().join("");
    }
    return arrOfWords.join(" ");
}

console.log(rearrangingLetters("Pletipus Cudnovati Kljunar"));

//task 5
function splitString(sentance){
    return sentance.split(" ");
}

console.log(splitString("Pletipus Cudnovati Kljunar"));

//6

function abbNameForm(name) {
    var arrName = name.split(" ");
    arrName[1] = arrName[1].slice(0,1) + ".";
    return arrName.join(" ");
}

console.log(abbNameForm("Uros Miletic"));

