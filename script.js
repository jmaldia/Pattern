// let firstName = ''; 
// let lastName = ''; 
// let age = 0;

// firstName = prompt("What's your first name?");
// lastName = prompt("What's your last name?");
// age = prompt("What's your age?");

// console.log(`Your name is ${firstName} ${lastName}.`);
// console.log(`You are ${age} years old.`);

// Change Navbar Color on Scroll
$(function(){
    $(document).scroll(function(){
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    })
});



let firstLi = document.getElementsByTagName("p")[0];
console.log(firstLi)
firstLi.addEventListener("click", function() {
    if (this.innerHTML === "Click Me") {
        firstLi.classList.toggle('big');
        firstLi.innerHTML = "Click Me Back"
    } else {
        firstLi.classList.toggle('big');
        firstLi.innerHTML = "Click Me"
    }
});

let dogImage = document.getElementById("dogImage");

// Change attribute
dogImage.addEventListener("click", function(){
    if (this.src.indexOf("Diarrhea") != -1) {
        dogImage.setAttribute("src", "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg")
    } else {
        dogImage.setAttribute("src", "https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg")
    }
});