// NAV MOBILE HAMBURGER
const HAMBURGER = document.querySelector(".hamburger");
const NAV_MOBILE = document.querySelector(".nav-top-mobile");
const CLOSE_BTN = document.querySelector("#close");

HAMBURGER.addEventListener("click", () => {
    NAV_MOBILE.style.left = "0";
});

CLOSE_BTN.addEventListener("click", () => {
    NAV_MOBILE.style.left = "-4000px";
})

