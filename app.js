const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});

window.addEventListener("load", () =>{
    const yearElement = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});

document.querySelectorAll(".navbar__links").forEach(link => {
    link.addEventListener("click", () => {
        if (menu.classList.contains("is-active")) {
            menu.classList.remove("is-active");
            menuLinks.classList.remove("active");
        }
    });
});