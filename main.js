const formEmail = document.getElementById("errorForm");
const inputEmail = document.getElementById("errorInput");
const errorEmail = document.getElementById("errorIcon");

inputEmail.addEventListener("invalid", () => {
    if(formEmail.classList.contains("warning")) return;
    formEmail.classList.toggle("warning");
    errorEmail.classList.toggle("hide");
})