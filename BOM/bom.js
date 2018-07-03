(function(){
    console.log("eksterni fajl");  
})();

(function (){
    console.log(navigator.platform + "\n" + navigator.appVersion + "\n" + navigator.vendor)
})();

(function isOnline(){
    navigator.onLine ? console.log("Online!!!") : console.log("Offline!");
})();

(function(){
    console.log(screen.availWidth + " " + screen.availHeight + "\n" + screen.height)
})();

(function(){
    console.log(location.href + "\n" + location.origin + "\n" + location.protocol +"\n" + location.pathname);
})();

(function(){
   return location.reload();
});

//(function(){
    //return location.assign("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const");
//});

function addItemInStorage(string, value){
    sessionStorage.setItem(string, value);
};

function printStorageData(string){
    var data = sessionStorage.getItem(string) || "There is no data";
    console.log(data);
};

function removeFromStorage(key){
    sessionStorage.removeItem(key);
};

addItemInStorage("uros", "bog");
printStorageData("uros");

history.back();


