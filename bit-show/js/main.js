// const dataModule = (() => {
//   sendRequest = () => {
//     var request = $.ajax({
//       url: "http://api.tvmaze.com/shows",
//       method: "GET"
//     });
//     request.done((response) => {
//       console.log(response);

//       const body = $("body");
//     const container = $(".container");
//     const row = document.createElement("div");
//     $(row).addClass("row");
//     const col = document.createElement("div");
//     $(col).addClass("col-4");
//     const showTitle = document.createElement("h5");

//     const searchInput = document.querySelector("#searchInput");
// for(let i = 0; i < response.length / 20; i++) {
//     showTitle.textContent = response[i].id;
//     let imageBig = document.createElement("img")
//     let imageSrc = response[i].image.original;
//     imageBig.setAttribute("src", imageSrc)
//     col.append(imageBig)
//     col.append(showTitle);
//     row.append(col);
//     container.append(row);
// }

//         body.append(container)
//     });
//   };
//   return {
//     sendRequest
//   };
// })();

// const uiModule = (() => {
//   collectData = () => {
//     const body = $("body");
//     const container = $(".container");
//     const row = document.createElement("div");
//     $(row).addClass("row");
//     const col = document.createElement("div");
//     $(col).addClass("col-4");
//     const showTitle = document.createElement("h5");

//     const searchInput = document.querySelector("#searchInput");
//   };
//   return {
//     collectData
//   };
// })();

// const mainModule = ((data, ui) => {
//   const searchBtn = document.querySelector("#searchBtn");
//   // init = (handleRequest) => {
//   // searchBtn.addEventListener("click", dataModule.sendRequest)
//   // }
//   // init()
//   dataModule.sendRequest();
// })(dataModule, uiModule);

const dataModule = (() => {
  sendRequest = successHandler => {
    var request = $.ajax({
      url: "http://api.tvmaze.com/shows",
      method: "GET"
    });
    request.done(response => {
      successHandler(response);
    //   var sortedResponse = [];
    //   for(var i = 0; i < response.length; i++) {
    //     var maxRating = response[0].rating
    //       if(response[i].rating > maxRating) {
    //           maxRating = response[i].rating;
    //         sortedResponse.push(maxRating)
    //       }
    //   }
    //   return sortedResponse;
    //   console.log(response);
    });
  };


  return {
    sendRequest
  };
})();

const uiModule = (() => {
    const body = $("body");
    const $container = $(".container");
    const searchInput = document.querySelector("#searchInput");

  displayData = response => {
    const $row = $("<div class='row'>");

    for (let i = 0; i < 50; i++) {
        const $card = $(`
            <div class='col-4'>
                <img src='${response[i].image.original}'>
                <a class='showTitle' href='./single.html'><h5>${response[i].name}</h5></a>
            </div>`
        );

        $row.append($card);
    }
    
    $container.append($row);
    console.log(response)
  };

  return {
    displayData
  };
})();

const mainModule = ((data, ui) => {
  const searchBtn = document.querySelector("#searchBtn");

  dataModule.sendRequest(function(response) {
    uiModule.displayData(response);
  });
})(dataModule, uiModule);
