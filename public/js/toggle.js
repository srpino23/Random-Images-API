const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".header-right");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("visible");
})