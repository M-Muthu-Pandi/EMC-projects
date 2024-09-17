// side Navbar
var sideNav = document.getElementById("sideNav");
var menuIcon = document.getElementById("menuicon");
var closeNav = document.getElementById("closeNav");

menuIcon.addEventListener("click", function(){
    sideNav.style.right = 0;
});

closeNav.addEventListener("click", function(){
    sideNav.style.right = "-50%";
});


// Product Search Functionality
var proContainer = document.getElementById("proContainer");
var search = document.getElementById("search");
var proList = proContainer.querySelectorAll("div");

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase();

    for(count=0; count<proList.length; count++){
        var proName = proList[count].querySelector("h1").textContent;

        if(proName.toUpperCase().indexOf(enteredValue)<0){
            proList[count].style.display = "none";
        }
        else {
            proList[count].style.display = "block";
        }
    }
});