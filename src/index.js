import './style.css';

import gsInn from './images/gs_inn.webp';

import tab from "./tab";
import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from "./contactPage";

const content = document.getElementById("content");

content.appendChild(tab());
// content.appendChild(homePage());
content.appendChild(menuPage());
// set homeTab marker on page load as it loads first automatically
document.getElementById('homeTab').classList.add('underline');

const bodyDiv = document.querySelector('body');
const bImg = document.createElement('img');
bImg.classList.add('background');
bImg.src = gsInn;
bodyDiv.appendChild(bImg);

function removeDiv() {
    const lastChild = content.lastElementChild;
    content.removeChild(lastChild);
}


function markCurrentNav(navID) {
    let underline = document.querySelector('.underline');
    if (underline) {
        underline.classList.remove('underline');
    }
    navID.classList.add('underline');
}

const home = document.getElementById('homeTab');
home.addEventListener('click', () => {
    removeDiv(),
    content.appendChild(homePage()),
    markCurrentNav(home)
});

const menu = document.getElementById('menuTab');
menu.addEventListener('click', () => {
    removeDiv(),
    content.appendChild(menuPage()),
    markCurrentNav(menu)
});

const contact = document.getElementById('contactTab');
contact.addEventListener('click', () => {
    removeDiv(),
    content.appendChild(contactPage()),
    markCurrentNav(contact)
});