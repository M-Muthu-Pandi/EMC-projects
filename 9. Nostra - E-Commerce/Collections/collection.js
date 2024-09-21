// Offer Alert
var offerAlert = document.querySelector(".offer-alert");
var offerClose = document.getElementById("offer-close");

offerClose.addEventListener("click", function () {
    offerAlert.style.display = "none";
});

// Side navbar
var sideNavMenu = document.getElementById("side-navbar__menu");
var sideNavbar = document.querySelector(".side-navbar");
var sideNavClose = document.getElementById("side-navbar-close");
sideNavMenu.addEventListener("click", function () {
    sideNavbar.style.left = "0";
});

sideNavClose.addEventListener("click", function () {
    sideNavbar.style.left = "-60%";
});

// Product Search Functionality
var proContainer = document.getElementById("proContainer");
var search = document.getElementById("search");
var proList = proContainer.querySelectorAll("div");

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase();

    for(count=0; count<proList.length; count++){
        var proName = proList[count].querySelector("h2").textContent;

        if(proName.toUpperCase().indexOf(enteredValue)<0){
            proList[count].style.display = "none";
        }
        else {
            proList[count].style.display = "block";
        }
    }
});