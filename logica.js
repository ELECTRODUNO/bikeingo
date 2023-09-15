const menuHaburguer = document.querySelector('.menu-hamburger');
const iconBars = menuHaburguer.querySelector("i");
const menu = document.querySelector('.manu');

menuHaburguer.addEventListener("click", () => {
    menu.classList.toggle('menu-responsive');
})