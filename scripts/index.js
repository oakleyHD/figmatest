const menu = document.getElementById("menu");
const burger = document.getElementById("burger");


burger.addEventListener("click", ()=> menu.classList.toggle("displayNone") )

//Slider Video
const slider = document.getElementById("slider");
const slide = slider.querySelectorAll(".slide");
const toggleRadio = document.getElementById("toggleRadio");
const toggleInput = toggleRadio.querySelectorAll("input");
const playButton1 = document.getElementById("playButton1");
const playButton2 = document.getElementById("playButton2");
const playButton3 = document.getElementById("playButton3");
const pauseButton1 = document.getElementById("pauseButton1");
const pauseButton2 = document.getElementById("pauseButton2");
const pauseButton3 = document.getElementById("pauseButton3");
const video = slider.querySelectorAll("video");
const buttonPause =slider.querySelectorAll(".buttonPause");

let currentSlide = 0;

toggleRadio.addEventListener("input", toggleSlide);
playButton1.addEventListener("click", play);
pauseButton1.addEventListener("click", pause);
playButton2.addEventListener("click", play);
pauseButton2.addEventListener("click", pause);
playButton3.addEventListener("click", play);
pauseButton3.addEventListener("click", pause);


function toggleSlide(event){
  if(buttonPause[currentSlide].className == "videoButton buttonPause"){
    stop();
  }
   slide[currentSlide].className = "slide";
   currentSlide = event.target.value;
   slide[currentSlide].className = "slide showing";
}
function play(){
  for(let i = 0; i < toggleInput.length; i++){
  
  	if(toggleInput[i].checked){
        video[i].play();
        toggleId();
  	}
  }
}
function toggleId(){
	for(let i = 0; i < toggleInput.length; i++){
  	if(toggleInput[i].checked){
       buttonPause[i].classList.toggle("none"); 
  	}
  }
}
function pause(){
  for(let i = 0; i < toggleInput.length; i++){
  	if(toggleInput[i].checked){
        video[i].pause();
        toggleId();
  	}
  }
}
function stop(){
      video[currentSlide].pause();
       video[currentSlide].currentTime = 0;
       buttonPause[currentSlide].classList.toggle("none");
}
