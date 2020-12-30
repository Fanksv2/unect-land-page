
const send = document.querySelector(".send");
const cancel = document.querySelector(".cancel");
const interButton = document.querySelector(".interrogacao")
const modal = document.querySelector(".modal")

function activateModal(){
    modal.classList.add("active");
    modal.classList.remove("disactive");
}
function desactivateModal(){
    modal.classList.remove("active");
    modal.classList.add("disactive");
}


send.addEventListener("click", () => {
    desactivateModal();
});
cancel.addEventListener("click", () => {
    desactivateModal();
});

modal.addEventListener("click", (event) => {

    if(event.target != modal)
        return;

    desactivateModal();
});

interButton.addEventListener("click", () => {
    activateModal();
});

interButton.addEventListener("click", () => activateModal);
