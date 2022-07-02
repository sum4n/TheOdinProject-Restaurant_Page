import './style.css';
// import goldShireInn from './GoldSInn.jpg';

import tab from "./tab";
import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from "./contactPage";

const content = document.getElementById("content");

// Looks like we dont need anything below to set a background image.
// Css is sufficient for this.
// const backgroundImg = new Image();
// backgroundImg.src = goldShireInn;
// document.appendChild(backgroundImg);
// const bgImg = document.createElement('img');
// bgImg.src = goldShireInn;
// let body = document.querySelector('body');
// // body.appendChild(bgImg);

content.appendChild(tab());
content.appendChild(homePage());


function removeDiv() {
    const child = content.lastElementChild;
    content.removeChild(child);
}

const home = document.getElementById('homeTab');
home.addEventListener('click', () => {
    removeDiv(),
    content.appendChild(homePage())
});

const menu = document.getElementById('menuTab');
menu.addEventListener('click', () => {
    removeDiv(),
    content.appendChild(menuPage())
});

const contact = document.getElementById('contactTab');
contact.addEventListener('click', () => {
    removeDiv(),
    content.appendChild(contactPage())
});