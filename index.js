'use strict';

//navbar open and close - barra de navegação, abrir e fechar

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
}


//click in links - ao clicar nos links 

const navbarLinks = document.querySelector("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function () {
        navbar.classList.remove("active");
    });
}


//scroleed down - ao rolar para baixo

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    window.scrollY >= 50 ? header.classList.add("active") 
    : header.classList.remove("active");

});