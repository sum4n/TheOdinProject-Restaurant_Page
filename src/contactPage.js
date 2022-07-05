export default function() {
    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id', 'contactPage');

    const contactHeading = document.createElement('h1');
    contactHeading.textContent = "Contact Information";

    contactDiv.appendChild(contactHeading);

    return contactDiv;
}