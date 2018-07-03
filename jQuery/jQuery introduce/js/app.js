$(function(){
    console.log("hello!")

    $("li:first").addClass("bottomBorder");
    $("li").css("text-transform","uppercase");
    $("li.active").css("color","red");
    var length = $("ul li").length;
    var middle = parseInt(length / 2);

    $("li:eq("+middle +")").css("background-color","cyan");

});



