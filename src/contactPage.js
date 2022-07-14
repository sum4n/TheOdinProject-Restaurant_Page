import innMap from './images/map.png';

export default function() {
    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id', 'contactPage');

    // const contactHeading = document.createElement('h1');
    // contactHeading.textContent = "Contact Information";
    // contactDiv.appendChild(contactHeading);

    const contactText = document.createElement('p');
    contactText.textContent = "Lion's Pride Inn (also known as the Goldshire Inn) is an inn found in the town of Goldshire, in Elwynn Forest."
    contactDiv.appendChild(contactText);

    const contactMap = document.createElement('img');
    contactMap.classList.add('contactMap');
    contactMap.src = innMap;
    contactDiv.appendChild(contactMap);

   

    return contactDiv;
}