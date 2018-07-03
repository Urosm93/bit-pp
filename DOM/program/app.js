var button = document.querySelector("#send");
var input = document.querySelector("#msg");
var section = document.querySelector(".messages");

function printText(){
    var p = document.createElement("p");
    p.textContent = input.value;

    section.appendChild(p)
    input.value = " ";
}
button.onclick = printText;
