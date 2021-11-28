const menuBg = document.querySelector(".gamburger-menu")

const open = () => {
    document.querySelector(".header__list").classList.toggle("show");
}
const applyTransform = () => {
    menuBg.classList.toggle("active")
}
menuBg.onclick = () => {
    open()
    applyTransform()
};