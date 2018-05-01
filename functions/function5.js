//task
// function modify(array) {
//     var max = array[0];
//     var min = array[0];
//     var minIndex = 0;
//     var maxIndex = 0;

//     for (var i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//             minIndex = i;
//         }

//         if (array[i] > max) {
//             max = array[i];
//             maxIndex = i;
//         }

//     }

//     array[minIndex] = min;
//     array[maxIndex] = max;

//     return array;

// }

// console.log(modify([3, 500, 12, 149, 53, 414, 1, 19]));



//task 2

// function newArray(arr){

//     for(var i = 0; i < arr.length; i++){
//         arr[i]= arr[i] / 2 + 5;
// if(arr[i] === 0){
//     arr[i] = 20;
// }
//     }
//     return arr;
// }

// console.log(newArray([ 3, 500, -10, 149, 53, 414, 1, 19 ]));


//task 3

// function student(points, names) {
//     var newArray = [];
//     var grade = 0;
//     for (var i = 0; i < points.length; i++) {
//         // racunanje bodova
//         if(points[i] <= 50) {
//             grade = "failed";
//         }
//             else if (points[i] >= 51 && points[i] <= 60) {
//             grade = 6;
//         }
//         else if (points[i] >= 61 && points[i] <= 70) {
//             grade = 7;
//         }
//         else if (points[i] >= 71 && points[i] <= 80) {
//             grade = 8;
//         }
//         else if (points[i] >= 81 && points[i] <= 90) {
//             grade = 9;
//         }
//         else if (points[i] >= 91 && points[i] <= 100){
//             grade = 10;
//         }
//         newArray[i] = names[i] + " acquired "+ points[i] +" points and earned " + grade;
//     }
//     return newArray;
// }
// console.log(student([50, 39, 63, 72, 99, 51, 83, 59]
//     , ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"]));


// task 4 

// function multiplied(array) {
//     var newArray = [];
//     var min = array[0];
//     var index = 0;

//     for (var i = 0; i < array.length; i++) {
//         for (var j = 0; j < array.length; j++) {
//             if (array[j] < min) {
//                 min = array[j];
//                 index = j;
//             }
//         }

//         newArray[i] = min*2;
//         array[index] =  9007199254740992;
//         min = 9007199254740992;

//     }
//     return newArray;
// }
// console.log(multiplied([13, 11, 15, 5, 6, 1, 8, 12]));


// task 5
// var numbers = [13, 11, 15, 5, 6, 1, 8, 12];

// function sortMaxToMin(array) {

//     for (var i = 0; i < array.length - 1; i++) {

//         var position = i;

//         for (var j = i; j < array.length; j++) {
//             if (array[position] < array[j]) {
//                 position = j;
//             }
//         }

//         var tmp = array[i];
//         array[i] = array[position];
//         array[position] = tmp
//     }
// }


// sortMaxToMin(numbers);

// console.log(numbers);


// task 6
// function makeArray() {
//     var evenArray = 0;
//     var oddArray = 0;
//     var result = 0;
//     for (var i = 0; i <= 1000; i++) {
//         if(i % 2 === 0) {
//             evenArray += i;
//         }

//     }
//     for (var i = 0; i <= 500; i++) {
//         if(i % 2 !== 0){
//             oddArray += i;
//         }
//     }

//     result = (evenArray - oddArray) * 12.5;


//     return result;
// }

// console.log(makeArray());


// task 7

function twoLetterArray(array) {
    var el = "";
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === "string" && array[i].length >= 2) {
            for (var j = 0; j < 2; j++) {
                el += array[i][j];
            }
        }
    }

    return el;
}


console.log(twoLetterArray(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]))