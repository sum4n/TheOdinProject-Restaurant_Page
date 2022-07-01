import innPic from './inn.jpg';

export default function() {
    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id', 'contactPage');

    const img = document.createElement('img');
    img.src = innPic;

    contactDiv.appendChild(img);

    return contactDiv;
}