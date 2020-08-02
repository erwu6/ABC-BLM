//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var correctAnswer = 0;
var wrongAnswer = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var result = document.getElementById("result");

var restart= document.getElementById("restart");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", wrong);
q1a2.addEventListener("click", correct);
q1a3.addEventListener("click", wrong);
q1a4.addEventListener("click", wrong);

q2a1.addEventListener("click", wrong);
q2a2.addEventListener("click", correct);
q2a3.addEventListener("click", wrong);
q2a4.addEventListener("click", wrong);

q3a1.addEventListener("click", correct);
q3a2.addEventListener("click", wrong);
q3a3.addEventListener("click", wrong);
q3a4.addEventListener("click", wrong);

restart.addEventListener("click", restart);

//#TODO: Define quiz functions here
function correct() {
  correctAnswer += 1;
  questionCount += 1;
  //alert("Pumpkin Spice Latte?!");
  if (questionCount >= 3) {
    updateResult();
  }
}
function wrong() {
  wrongAnswer += 1;
  questionCount += 1;
//alert("Bees! NOO T-T");
  if (questionCount >= 3) {
    updateResult();
  }
}

function updateResult(){
  if (correctAnswer >= 3){
    result.innerHTML="You got all correct!!";
  }
  else if(wrongAnswer >= 3){
    result.innerHTML="Try again";
  }
  else if (wrongAnswer = 1) {
    result.innerHTML="You got almost all correct!!";
  }
   else if(correctAnswer = 1){
    result.innerHTML="You got one correct!!";
  }
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
