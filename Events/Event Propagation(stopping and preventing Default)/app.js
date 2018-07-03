var imgs = document.querySelectorAll("img")
var gallery = document.querySelector(".container");

gallery.addEventListener("click", getClass);

function getClass(event){
    var clickedElement = event.target;
    if(clickedElement.tagName.toLowerCase() !== "img"){
        return;
    }

    clickedElement.classList.toggle("border");
    
    if(clickedElement.width < 300){
        event.stopPropagation();
    }

}
        document.addEventListener("click",function(event){
            console.log(event.target);
        })




