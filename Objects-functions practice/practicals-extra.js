//zadatak 1Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

var duplicate = function (arr) {
    var duplicated = [];

    arr.forEach(function (item) {
        duplicated.push(item, item);
    });
    return duplicated
}

console.log(duplicate([2, 4, 7, 11, -2, 1]))

//zadatak 2
// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 


var removeDuplicates = function (input) {
    var sortedArr = input.slice().sort();
    var newArr = [];
    for (var i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i + 1] !== sortedArr[i]) {
            newArr.push(sortedArr[i]);
        }
    }
    return newArr.sort(function (a, b) {
        return a - b;
    });
}
console.log(removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

//zadatak 3
// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

// Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

function hasOddElements(arr) {
    return arr.length % 2 !== 0;
}

function smallerThanMiddleElement(arr) {
    if (!hasOddElements(arr)) {
        return "error";
    }
    var counter = 0;
    var i = (arr.length - 1) / 2;
    arr.forEach(function (item, index) {
        if (arr[i] > item) {
            counter++;
        };
    })
    return counter;
}
console.log(smallerThanMiddleElement([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

//zadatak 4


// Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

function minElementInObject(arr) {
    var min = Math.min(...arr);
    var minIndex = arr.lastIndexOf(min);

    return { minValue: min, minLastIndex: minIndex };
}
console.log(minElementInObject([1, 4, -2, 11, 8, 1, -2, 3]));

//zadatak 5

// Write a function that finds all the elements in a given array less than a given element. 
// 	Input: [2, 3, 8, -2, 11, 4], 6 
// 	Output: [2, 3, -2, 4]
// Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
// 		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
// 	Output: [’Programming’, ‘product’]

// Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. 
//a
function lessThanANum(arr, num) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(lessThanANum([2, 3, 8, -2, 11, 4], 6));

//b

function pro(arr) {
    var start = "pro";
    var newArr = [];
    arr.forEach(function (item) {
        if (item.toLowerCase().slice(0, 3) === start) {
            newArr.push(item);
        }
    });
    return newArr;
}
console.log(pro(["JavaScript", "Programming", "fun", "product"]));

//zadatak 6
// Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
// 	[
// {name: ‘apples’, price: 100}, 
// {name: ‘milk’, price: 80}, 
// {name:’bananas’, price: 150}
// ]
// Write a function that calculates the total price of your shopping list. 
// Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
// Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 





var listOfProducts = [
    { name: "apples", price: 100 },
    { name: "milk", price: 80 },
    { name: "bananas", price: 150 }
];

function totalPrice(listOfProducts){
    
}















