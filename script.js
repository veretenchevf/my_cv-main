const MENU_BOX = document.querySelector("#home > nav");
const BURGER = document.querySelector("#home > label");

BURGER.addEventListener('click', () => {
    MENU_BOX.classList.toggle('active__menu')
})

MENU_BOX.addEventListener('click', () => {
    MENU_BOX.classList.toggle('active__menu')
})
