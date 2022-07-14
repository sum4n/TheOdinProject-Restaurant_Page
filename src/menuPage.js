import alteracSwiss from './alteracSwiss.webp';
import copper from './Copper.webp';


export default function() {
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menuPage');

    const title = document.createElement('h1');
    title.textContent = "Foods & Drinks"
    title.classList.add('title');
    menuDiv.appendChild(title);

    const foodsNdrinks = document.createElement('div');
    foodsNdrinks.classList.add('foodsNdrink');
    class MenuItems {
        constructor( itemImgSrc, nameTxt, priceTxt, priceImgSrc){
            this.itemImgSrc = itemImgSrc;
            this.nameTxt = nameTxt;
            this.priceTxt = priceTxt;
            this.priceImgSrc = priceImgSrc;
        }

        addToDom() {
            const itemDiv = document.createElement('div');

            const itemImg = document.createElement('img');
            itemImg.src = this.itemImgSrc;
            
            const itemNameDiv = document.createElement('p');
            itemNameDiv.textContent = this.nameTxt;
            
            const itemPriceDiv = document.createElement('p');
            itemPriceDiv.textContent = this.priceTxt;

            const itemPriceImg = document.createElement('img');
            itemPriceImg.src = this.priceImgSrc;

            itemDiv.append(itemImg, itemNameDiv, itemPriceDiv, itemPriceImg);

            foodsNdrinks.appendChild(itemDiv);

        }
    }

    let alteracswiss = new MenuItems(alteracSwiss, "Alterac Swiss", 40, copper);
    alteracswiss.addToDom();

    menuDiv.appendChild(foodsNdrinks);

    return menuDiv;
}