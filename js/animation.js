
const elements = document.querySelectorAll('.js-animate');

function animateScroll(){
    elements.forEach(element => {
        activateDistance = window.innerHeight;

        if(element.getBoundingClientRect().top < activateDistance)
            element.classList.add("animado");
    });
}

window.addEventListener("scroll", (event) =>{
    animateScroll();
});

animateScroll();

