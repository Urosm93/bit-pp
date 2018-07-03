// function selectUOList() {
//     return document.querySelectorAll("ul")[0].className = "background";
// }
// selectUOList();

// function selectLi (){
//     var ul = document.querySelectorAll("li");
//     ul.forEach(function (element) {
//         element.className = "allLi";
//     });
// };  
// selectLi();

// function removeClass() {
//     var newItem = document.querySelector(".active");
//     newItem.className = "";
//     newItem.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.className = "active";
// }
// removeClass();
var parent = document.querySelector(".dropdown");
var parent2 = document.querySelector(".first")
var list = ["mercedes", "audi", "yugo", "fica"];
var list2 = ["BMW", "Lamborghini", "Ferrari", "Aston Martin"]

function appendDropdown(arr, nodeParent) {
    var select = document.createElement("select");

    arr.forEach(function (text) {
        var option = document.createElement("option");
        option.textContent = text;
        select.appendChild(option);
    });

    nodeParent.appendChild(select);
}


appendDropdown(list, parent);
appendDropdown(list2, parent2);


function inputValidation() {
    var inputs = document.querySelectorAll('form label input');

    inputs.forEach(function (input) {
        if (input.hasAttribute("required") && input.value === "") {
            input.className = "newClass";
        }
        else {
            input.className ="";
        }
    })
}