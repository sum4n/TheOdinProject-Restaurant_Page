export default function tab() {

    const tabDiv = document.createElement('div')
    tabDiv.setAttribute('id', 'tabNav');

    const home = document.createElement('p');
    home.setAttribute('id', 'homeTab');
    home.textContent = "Home";

    const menu = document.createElement('p');
    menu.setAttribute('id', 'menuTab');
    menu.textContent = "Menu";

    const contact = document.createElement('p');
    contact.setAttribute('id', 'contactTab');
    contact.textContent = "Contact";

    tabDiv.appendChild(home);
    tabDiv.appendChild(menu);
    tabDiv.appendChild(contact);

    return tabDiv;

}