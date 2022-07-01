import innImage from './GoldshireInn.webp';

export default function firstPage() {
    const homePageDiv = document.createElement('div');
    homePageDiv.setAttribute('id', 'homePage');

    const h1 = document.createElement('h1');
    h1.textContent = "Lion's Pride Inn";

    const moto = document.createElement('p');
    moto.textContent = "Rest and relaxation for the tired and cold.";

    // const myInn = new Image();
    // myInn.src = innImage;

    const img = document.createElement('img');
    img.src = innImage;

    const info = document.createElement('p');
    info.textContent = "Lion's Pride Inn, aka Goldshire Inn, is the main inn of the town of Goldshire, located in Elwynn Forest. It is known for the frequent duels that take place just outside its entrance, and the just as frequent 'exotic entertainment' that Goldshire is infamous for. Quite possibly the busiest non-city inn of all the zones, Lion's Pride offers a wide range of services from class trainers and quest givers to drinks aplenty."

    homePageDiv.appendChild(h1);
    homePageDiv.appendChild(moto);
    homePageDiv.appendChild(img);
    homePageDiv.appendChild(info);
    
    return homePageDiv;
}
