var searchform = document.querySelector(".search-form");
var navbar = document.querySelector(".navbar");

//! buttons 
var searchbtn = document.querySelector("#search-btn");
var rspbtn = document.querySelector("#rsp-btn");

searchbtn.addEventListener("click",function(){
    searchform.classList.toggle("active");

    document.addEventListener("click",function (event) {
        if (!event.composedPath().includes(searchbtn) && !event.composedPath().includes(searchform)) {
            searchform.classList.remove("active");
        }
    })
});

rspbtn.addEventListener("click", function () {
    navbar.classList.toggle("active");

    document.addEventListener("click", function (event) {
        if (!event.composedPath().includes(rspbtn) && !event.composedPath().includes(navbar)) {
            navbar.classList.remove("active");
        }
    })
});

var sil = function () { 
    var metin = document.getElementById('intro');

    metin.value = "" ; 
};