const slider = document.querySelectorAll(".slider-images *");
const next = document.querySelector(".right");
const previous = document.querySelector(".left");

const images = [];

slider.forEach((element) =>{
    images.push(element);
});

next.addEventListener("click", (event) => {
    resetAutomaticSlide();
    nextSlide();
});
previous.addEventListener("click", (event) => {
    resetAutomaticSlide();
    previousSlide();
});

let pos = 0;
var timeBetweenImages = 3000;
var timer = setInterval(() => {}, 0);

function automaticSlide(){
    timer = setInterval(nextSlide, timeBetweenImages);
}
function resetAutomaticSlide(){
    clearInterval(timer);
    timer = setInterval(nextSlide, timeBetweenImages);
}
function render(){
    for (var i = 0; i < images.length; i++) {
        if(i != pos){
            images[i].style.display = "none";
            images[i].classList.remove("fade");
        }
        else{
            images[i].style.display = "block";
            images[i].classList.add("fade");
        }
    }
}
function nextSlide(){
    
    pos++;
    if(pos >= images.length){
        pos = 0;
    }
    render();
}

function previousSlide(){
    
    pos--;
    if(pos < 0){
        pos = images.length - 1;
    }
    render();
}

nextSlide();
automaticSlide();




