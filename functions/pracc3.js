// //task1

// function insertString(largeString, smallString, count) {
//     var newString = "";
//     // var count = count || 1;
//     if(count === undefined) {
//         count = 0;
//     }

//     for (var i = 0; i < largeString.length; i++) {
//         if (i === count) {
//             newString += smallString;
//         }
//         newString += largeString[i];
//     }
//     return newString;
// }


// console.log(insertString("ovde nesto pise", "DA"));


// task 2

// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]

function joinElements(array) {
    var string = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== undefined && (!isNaN(array[i]) || typeof array[i] === "string") && array[i] !== Infinity && array[i] !== null) {
            string += array[i];
        } 
    }
    return string;
}
console.log(joinElements([1, 0, undefined, NaN, 56, "pljeskavica", 76]));