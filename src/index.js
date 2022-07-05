import './style.css';

import GoldShireInn from './GoldshireInn.webp';
import FoodImg from './Food.webp';
import ContactImg from './inn.jpg';

import tab from "./tab";
import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from "./contactPage";

const content = document.getElementById("content");

content.appendChild(tab());
content.appendChild(homePage());
setBackground(GoldShireInn);


function removeDiv() {
    const child = content.lastElementChild;
    content.removeChild(child);
}

function setBackground(imgUrl) {
    document.body.style.background = `url(${imgUrl}) no-repeat fixed center`;
    // cover to set backgroundSize to cover whole screen
    document.body.style.backgroundSize = 'cover';
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
    setBackground(GoldShireInn),
    markCurrentNav(home)
});

const menu = document.getElementById('menuTab');
menu.addEventListener('click', () => {
    removeDiv(),
    content.appendChild(menuPage()),
    setBackground(FoodImg),
    markCurrentNav(menu)
});

const contact = document.getElementById('contactTab');
contact.addEventListener('click', () => {
    removeDiv(),
    content.appendChild(contactPage()),
    setBackground(ContactImg),
    markCurrentNav(contact)
});