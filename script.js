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
let firstButton = document.getElementById("firstButton");

firstButton.addEventListener("click", function() {
    if (this.innerHTML === "Original Text") {
        firstLi.classList.toggle('big');
        firstLi.innerHTML = "Text after Clicking"
    } else {
        firstLi.classList.toggle('big');
        firstLi.innerHTML = "Original Text"
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

// Score Keeper
let pOneScore = document.getElementById("p1Score");
let pTwoScore = document.getElementById("p2Score");
let pOneButton = document.getElementById("p1Button");
let pTwoButton = document.getElementById("p2Button");
let scoreOne = 0;
let scoreTwo = 0;
let winningScore = 5


pOneButton.addEventListener("click", function() {
    scoreOne++;
    pOneScore.textContent = scoreOne;
    
    if (scoreOne === winningScore) {
        setTimeout(() => {
            alert('Player 1 won. Play again.');
        }, 70);
        reset();
    }
});

pTwoButton.addEventListener("click", function() {
    scoreTwo++;
    pTwoScore.textContent = scoreTwo;

    if (scoreTwo === winningScore) {
        setTimeout(() => {
            alert('Player 2 won. Play again.')
        }, 70);
        reset();
    }
});

let reset = () => {  
    setTimeout(() => {
        scoreOne = 0;
        scoreTwo = 0;
        pOneScore.textContent = 0;
        pTwoScore.textContent = 0;
    }, 100);
}