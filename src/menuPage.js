export default function() {
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menuPage');

    const title = document.createElement('h1');
    title.textContent = "Foods & Drinks"
    
    menuDiv.appendChild(title);

    return menuDiv;
}