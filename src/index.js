import {homeCreate} from "./home.js";
import {menuCreate} from "./menu.js";
import {contactCreate} from "./about.js";

const content = document.querySelector('#content');
const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#about');

function clearPage() {
    while (content.firstChild) {
        content.lastChild.remove();
    }
}

function homeTab() {
    clearPage();
    homeCreate();
}

function menuTab() {
    clearPage();
    menuCreate();
}

function contactTab() {
    clearPage();
    contactCreate();
}

home.addEventListener("click", homeTab);
menu.addEventListener("click", menuTab);
about.addEventListener("click", contactTab);