const menu = document.querySelector(".nav__menu");
const menuList = document.querySelector(".nav__list");
const links = document.querySelectorAll(".nav__link");
const heroFigure = document.querySelector(".hero__figure");

// MENU
menu.addEventListener("click", () => {
    menuList.classList.toggle("nav__list--show");
    heroFigure.classList.toggle("hero__figure__hidden");
})
