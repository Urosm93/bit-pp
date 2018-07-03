$(function () {
    var links = [
        "https://www.planwallpaper.com/static/images/beautiful-sunset-images-196063.jpg",
        "https://cdn.pixabay.com/photo/2018/03/06/21/09/easter-3204589__340.jpg",
        "http://bdfjade.com/data/out/102/6066356-wallpaper-image.jpeg", "https://3.bp.blogspot.com/--wJKcRs0bKc/Wntv6WfrlVI/AAAAAAAAASg/TP_zwxM0XF8AOFqOuOjVrHEvYUiisI6QwCLcBGAs/s1600/3.jpeg"
    ];

    var $container = $("<div>");
    links.forEach(function (imageSrc) {
        var $img = $("<img>");
        $img.attr("src", imageSrc);
        $img.width(Math.floor(Math.random() * (800 - 100 + 1) + 100));
        $container.append($img);

    });

    var $images = $("img");
    $images.each(function () {

        var element = $(this);

        if (this.width() < 500) {
        this.attr("style","border: 5px solid green");
    } else {
        return false;
    }

})





$("body").append($container);
});