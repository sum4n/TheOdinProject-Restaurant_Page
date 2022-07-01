import food from './Food.webp';

export default function() {
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menuPage');

    const img = document.createElement('img');
    img.src = food;

    menuDiv.appendChild(img);

    return menuDiv;
}