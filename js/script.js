const menu = document.querySelector(".nav__menu");
const menuList = document.querySelector(".nav__list");
const links = document.querySelectorAll(".nav__link");
const heroFigure = document.querySelector(".hero__figure");
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".button__calculadora");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === "=") {
            display.value = eval(display.value);
        }else if( button.id === "de"){
            display.value = display.value.slice(0, -1);
        }else if(button.id === "ac"){
            display.value = "";
        }else{
            display.value += button.id;
        }
    })
})

menu.addEventListener("click", () => {
    menuList.classList.toggle("nav__list--show");
    heroFigure.classList.toggle("hero__figure__hidden");
})

links.forEach(link => {
    link.addEventListener("click", () => {
        menuList.classList.remove("nav__list--show");
    })
})

