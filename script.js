const MENU_BOX = document.querySelector("#home > nav");
const BURGER = document.querySelector("#home > label");
const IMGS = document.querySelectorAll("[data-url]")

console.log(IMGS)
BURGER.addEventListener('click', () => {
    MENU_BOX.classList.toggle('active__menu')
})

MENU_BOX.addEventListener('click', () => {
    BURGER.click()
})

IMGS.forEach(img => {
    img.addEventListener("click", (click) => {
        let url = click.target.getAttribute('data-url');
        window.open(`${url}`, '_blank');
    })
})
