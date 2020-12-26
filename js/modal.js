
const send = document.querySelector(".send");
const cancel = document.querySelector(".cancel");
const subscribe = document.querySelector(".header-inscreva button")
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
subscribe.addEventListener("click", () => {
    activateModal();
});

subscribe.addEventListener("click", () => activateModal);
