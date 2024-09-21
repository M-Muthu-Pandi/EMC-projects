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