import tab from "./tab";
import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from "./contactPage";

const content = document.getElementById("content");

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