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

// Offer Alert
var offerAlert = document.querySelector(".offer-alert");
var offerClose = document.getElementById("offer-close");

offerClose.addEventListener("click", function () {
    offerAlert.style.display = "none";
});


// Slider
var sliderleftbutton = document.getElementById("slider-left-button");
var sliderrightbutton = document.getElementById("slider-right-button");
var sliderimage = document.querySelector(".slider-image-container");
var slidermargin = 0

sliderrightbutton.addEventListener("click", function () {
    slidermargin = slidermargin + 100

    if (slidermargin > 200) {
        slidermargin = 0;
        sliderimage.style.marginLeft = 0;
    } else {
        sliderimage.style.marginLeft = "-" + slidermargin + "vw";
    }
});

sliderleftbutton.addEventListener("click", function () {
    if (slidermargin == 0) {
        slidermargin = 200;
        sliderimage.style.marginLeft = "-" + slidermargin + "vw";
    } else {
        slidermargin = slidermargin - 100;
        sliderimage.style.marginLeft = "-" + slidermargin + "vw";
    }
});

// Most Wanted
var likeButtons = document.querySelectorAll(".like-button");

likeButtons.forEach(function (button) {
    var emptyHeart = button.querySelector(".heart-empty");
    var fillHeart = button.querySelector(".heart-fill");

    emptyHeart.addEventListener("click", function () {
        emptyHeart.style.display = "none";
        fillHeart.style.display = "block";
    });

    fillHeart.addEventListener("click", function () {
        fillHeart.style.display = "none";
        emptyHeart.style.display = "block";
    });
});
