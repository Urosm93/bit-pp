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

function removeClass() {
    var newItem = document.querySelector(".active");
    newItem.className = "";
    newItem.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.className = "active";
}
removeClass();
