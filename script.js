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
    firstLi.classList.toggle('big');
    firstLi.innerHTML = "I Was Clicked"
});

let dogImage = document.getElementById("dogImage");

// Change attribute
dogImage.addEventListener("click", function(){
    dogImage.setAttribute("src", "https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg")
});