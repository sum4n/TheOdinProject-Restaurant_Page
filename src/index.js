import firstPage from './firstPage';

const content = document.getElementById("content");

content.appendChild(firstPage().h1);
content.appendChild(firstPage().moto);
content.appendChild(firstPage().img);
content.appendChild(firstPage().info);
