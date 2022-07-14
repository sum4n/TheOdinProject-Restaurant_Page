import alteracSwiss from './images/alteracSwiss.webp';
import dalaranSharp from './images/dalaranSharp.webp';
import darnassianBleu from './images/darnassianBleu.webp';
import dwarvenMild from './images/dwarvenMild.webp';
import fineAgedCheddar from './images/fineAgedCheddar.webp';
import stormwindBrie from './images/stormwindBrie.webp';
import dalaranNoir from './images/dalaranNoir.webp';
import dwarvenMead from './images/dwarvenMead.webp';
import stormwindTawny from './images/stormwindTawny.webp';
import footeTripel from './images/footeTripel.webp';
import ambrosia from './images/ambrosia.webp';
import iceColdMilk from './images/iceColdMilk.webp';
import melonJuice from './images/melonJuice.webp';
import copper from './images/Copper.webp';
import silver from './images/Silver.webp';
import gold from './images/Gold.webp';


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
            itemDiv.classList.add('menuItems');

            const itemImg = document.createElement('img');
            itemImg.classList.add('itemImg');
            itemImg.src = this.itemImgSrc;

            const itemNamePriceDiv = document.createElement('div');
            itemNamePriceDiv.classList.add('itemNamePrice');
            
            const itemNameDiv = document.createElement('p');
            itemNameDiv.classList.add('itemName');
            itemNameDiv.textContent = this.nameTxt;
            
            const itemPriceDiv = document.createElement('p');
            itemPriceDiv.textContent = this.priceTxt;

            const itemPriceImg = document.createElement('img');
            itemPriceImg.classList.add('priceImg');
            itemPriceImg.src = this.priceImgSrc;

            itemPriceDiv.appendChild(itemPriceImg);

            itemNamePriceDiv.append(itemNameDiv, itemPriceDiv);

            itemDiv.append(itemImg, itemNamePriceDiv);

            foodsNdrinks.appendChild(itemDiv);

        }
    }

    let alteracswiss = new MenuItems(alteracSwiss, "[Alterac Swiss]", 40, copper);
    alteracswiss.addToDom();

    let dalaransharp = new MenuItems(dalaranSharp, "[Dalaran Sharp]", 2, silver);
    dalaransharp.addToDom();

    let darnassianbleu = new MenuItems(darnassianBleu, "[Darnassian Blue]", 25, copper);
    darnassianbleu.addToDom();

    let dwarvenmild = new MenuItems(dwarvenMild, "[Dwarven Mild]", 5, silver);
    dwarvenmild.addToDom();

    let fineagedcheddar = new MenuItems(fineAgedCheddar, "[Fine Aged Cheddar]", 20, silver);
    fineagedcheddar.addToDom();

    let stormwindbrie = new MenuItems(stormwindBrie, "[Stromwind Brie]", 10, silver);
    stormwindbrie.addToDom();

    let dalarannoir = new MenuItems(dalaranNoir, "[Bottle of Dalaran Noir]", 50, copper);
    dalarannoir.addToDom();

    let dwarvenmead = new MenuItems(dwarvenMead, "[Flagon of Dwarven Mead]", 15, silver);
    dwarvenmead.addToDom();

    let stormwindtawny = new MenuItems(stormwindTawny, "[Flask of Stormwind Tawny]", 2, silver);
    stormwindtawny.addToDom();

    let footetripel = new MenuItems(footeTripel, "[Foote Tripel]", 3, gold);
    footetripel.addToDom();

    let ambroSia = new MenuItems(ambrosia, "[Hearthglen Ambrosia]", 3, gold);
    ambroSia.addToDom();

    let iceColdmilk = new MenuItems(iceColdMilk, "[Ice Cold Milk]", 1, silver);
    iceColdmilk.addToDom();

    let melonjuice = new MenuItems(melonJuice, "[Melon Juice]", 5, silver);
    melonjuice.addToDom();


    menuDiv.appendChild(foodsNdrinks);

    return menuDiv;
}