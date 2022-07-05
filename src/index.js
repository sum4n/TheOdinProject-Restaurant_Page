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
// set homeTab marker on page load as it loads first automatically
document.getElementById('homeTab').classList.add('underline');


function removeDiv() {
    const lastChild = content.lastElementChild;
    content.removeChild(lastChild);
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