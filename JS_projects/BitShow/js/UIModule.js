const UIModule = (() => {

    var searchField = $('#search');
    var printField = $('#content');
    var searchResultList = $('#search-result');
    var selectedElement = $();
    let seasonList = $("#season-list");

    //show allShow list in page

    function printAllShows(arr) {
        arr.forEach(function (el) {
            let printDiv = `<div class="show-container">
        <img src="${el.image.medium}" data-id ="${el.id}">
        <p>${el.name}</p></div>`;
            printField.append(printDiv);
        });
    }

    function printSearchResults(arr) {
        searchResultList.empty();
        arr.forEach(function (el) {
            let printDiv = `<li value="${el.show.id}">${el.show.name}</li>`;
            searchResultList.append(printDiv);
        });
    }

    function printSeasons(seasonsData) {
        seasonsData.forEach((el) => {
            let seasonLi = `<li>${el.premiereDate}-${el.endDate}</li>`;
            $('#season-list').append(seasonLi);
        })
    }

    function printCast(castData) {
        castData.forEach((el) => {
            let castLi = `<li>${el.person.name}</li>`;
            $('#cast-list').append(castLi);
        })
    }

    function showImg(show){
        let imgDiv = $("#img-container");
        let bigImg = `<img src="${show.image.original}">`;
        imgDiv.html(bigImg);
    }

    function printDescription(show){
        let descriptionDiv = $("#description-container");
        let description = `<p>${show.summary}</p>`;
        descriptionDiv.html(description);
    }

    function printShowName(show){
        let showNameDiv = $("#show-name");
        let showName = `<h1>${show.name}</>`;
        showNameDiv.html(showName);
    }

    return {
        printAllShows,
        printSearchResults,
        printSeasons,
        printCast,
        showImg,
        printDescription,
        printShowName
    }
})();