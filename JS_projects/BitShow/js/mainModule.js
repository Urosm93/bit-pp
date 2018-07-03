var mainModule = (function () {
    // init
    // initSinglePage
    //ajax 
    const allShowsUrl = 'http://api.tvmaze.com/shows';
    $(function () {
        var request = $.get(allShowsUrl);
        request.done(function (response) {
            let allShows = response;
            console.log(allShows);
            let show = dataModule.createTVShows(allShows);
            UIModule.printAllShows(show.shows);

            $(".show-container img").on("click", function (){
                localStorage.setItem("id", $(this).attr("data-id"));
                location.href = "infopage.html"; 
            });
        });
    });

    

    //function searchForShow() {
    $("#search").on('keyup', function () {

        var searchValue = $("#search").val();
        let showUrl = `http://api.tvmaze.com/search/shows?q=${searchValue}`;

        var request = $.get(showUrl);
        request.done(function (response) {
            response.length = 10;
            UIModule.printSearchResults(response);
            attachListeners();
            //console.log(response);
        });
        // dataModule.createShow(response[0].show.name, response[0].show.image.original, 
        //     response[0].show.id, response[0].show.summary)
    });


    // response for seasons
function attachListeners() {
    $("li").on('click', function () {
        
        localStorage.setItem('id', $(this).attr("value"));
        location.href = "infopage.html";
    });
}


    

    

    // var responseForSeason = [response[0].premierDate, response[0].endDate];
    // console.log(responseForSeason);
    //}

    // return {
    //     init,
    //     initSinglePage
    // }
})(dataModule, UIModule);