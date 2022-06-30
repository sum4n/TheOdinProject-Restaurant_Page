export default function tab() {

    const tabDiv = document.createElement('div')

    const home = document.createElement('p');
    home.textContent = "Home";

    const menu = document.createElement('p');
    menu.textContent = "Menu";

    const contact = document.createElement('p');
    contact.textContent = "Contact";

    tabDiv.appendChild(home);
    tabDiv.appendChild(menu);
    tabDiv.appendChild(contact);

    return tabDiv;

}