
let coffe = document.querySelector('.coffe-cost');
let parsedCoffe = parseFloat(coffe.innerHTML);

let clickerCost = document.querySelector('.clicker-cost');
let parsedClickerCost = parseFloat(clickerCost.innerHTML);
let clickerLevel = document.querySelector('.clicker-level');
let clickerIncrease = document.querySelector('.clicker-increase');
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML);

let WaterCost = document.querySelector('.Water-cost');
let parsedWaterCost = parseFloat(WaterCost.innerHTML);
let WaterLevel = document.querySelector('.Water-level');
let WaterIncrease = document.querySelector('.Water-increase');
let parsedWaterIncrease = parseFloat(WaterIncrease.innerHTML);

let FactoryCost = document.querySelector('.Factory-cost');
let parsedFactoryCost = parseFloat(FactoryCost.innerHTML);
let FactoryLevel = document.querySelector('.Factory-level');
let FactoryIncrease = document.querySelector('.Factory-increase');
let parsedFactoryIncrease = parseFloat(FactoryIncrease.innerHTML);

let ChampCost = document.querySelector('.Champ-cost');
let parsedChampCost = parseFloat(ChampCost.innerHTML);
let ChampLevel = document.querySelector('.Champ-level');
let ChampIncrease = document.querySelector('.Champ-increase');
let parsedChampIncrease = parseFloat(ChampIncrease.innerHTML);

let gpc = 1; // Gain par clic
let totalCoffeProduced = 0;
let totalCoffeSpent = 0;

let SkinCost = document.querySelector('.Skin-cost');
let parsedSkinCost = parseFloat(SkinCost.innerHTML);
let SkinLevel = document.querySelector('.Skin-level');
let skinImage = document.querySelector('.coffe-img'); 

function incrementCoffe() {
    parsedCoffe += gpc;
    totalCoffeProduced += gpc;
    coffe.innerHTML = Math.round(parsedCoffe);
    updateStats();

}



function buyClicker() {
    if (parsedCoffe >= parsedClickerCost) {
        parsedCoffe -= parsedClickerCost;
        totalCoffeSpent += parsedClickerCost;
        coffe.innerHTML = Math.round(parsedCoffe);

        clickerLevel.innerHTML++;
        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.04).toFixed(2));
        clickerIncrease.innerHTML = parsedClickerIncrease;

        gpc += parsedClickerIncrease;

        parsedClickerCost *= 5.50;
        clickerCost.innerHTML = Math.round(parsedClickerCost);

        updateStats();
    }
}

function buyWater() {
    if (parsedCoffe >= parsedWaterCost) {
        parsedCoffe -= parsedWaterCost;
        totalCoffeSpent += parsedWaterCost;
        coffe.innerHTML = Math.round(parsedCoffe);

        WaterLevel.innerHTML++;
        parsedWaterIncrease = parseFloat((parsedWaterIncrease * 1.03).toFixed(2));
        WaterIncrease.innerHTML = parsedWaterIncrease;

        gpc += parsedWaterIncrease;

        parsedWaterCost *= 7.6;
        WaterCost.innerHTML = Math.round(parsedWaterCost);

        updateStats();
    }
}

function buyFactory() {
    if (parsedCoffe >= parsedFactoryCost) {
        parsedCoffe -= parsedFactoryCost;
        totalCoffeSpent += parsedFactoryCost;
        coffe.innerHTML = Math.round(parsedCoffe);

        FactoryLevel.innerHTML++;
        parsedFactoryIncrease = parseFloat((parsedFactoryIncrease * 1.03).toFixed(2));
        FactoryIncrease.innerHTML = parsedFactoryIncrease;

        gpc += parsedFactoryIncrease;

        parsedFactoryCost *= 8.2;
        FactoryCost.innerHTML = Math.round(parsedFactoryCost);

        updateStats();
    }
}

function buyChamp() {
    if (parsedCoffe >= parsedChampCost) {
        parsedCoffe -= parsedChampCost;
        totalCoffeSpent += parsedChampCost;
        coffe.innerHTML = Math.round(parsedCoffe);

        ChampLevel.innerHTML++;
        parsedChampIncrease = parseFloat((parsedChampIncrease * 1.03).toFixed(2));
        ChampIncrease.innerHTML = parsedChampIncrease;

        gpc += parsedChampIncrease;

        parsedChampCost *= 9.5;
        ChampCost.innerHTML = Math.round(parsedChampCost);

        updateStats();
    }
}

function updateStats() {
    document.getElementById('currentCoffe').textContent = Math.round(parsedCoffe);
    document.getElementById('totalCoffe').textContent = Math.round(totalCoffeProduced);
    document.getElementById('spentCoffe').textContent = Math.round(totalCoffeSpent);
}

function buySkin() {
  
    parsedSkinCost = parseFloat(SkinCost.innerHTML.replace(/\s/g, '').replace(',', '.'));

    
    if (parsedCoffe >= parsedSkinCost) {
     
        parsedCoffe -= parsedSkinCost;
        totalCoffeSpent += parsedSkinCost;
        coffe.innerHTML = Math.round(parsedCoffe);

        
        SkinLevel.innerHTML++;

      
        skinImage.src = "./assets/putin.jpg"; 


        parsedSkinCost *= 1.18;
        SkinCost.innerHTML = Math.round(parsedSkinCost); 

        
        updateStats();
    } else {
      
        const popup = document.getElementById('game-popup');
        const popupMessage = document.getElementById('popup-message');
        
        popupMessage.textContent = "NO cash to buy coffee for Mister Putin!";
        
       
        popup.style.display = 'block';

        
        const closeBtn = document.getElementById('popup-close-btn');
        closeBtn.onclick = function() {
            popup.style.display = 'none';
        }
    }
}

function buySkinCoffee2() {
    let costElement = document.querySelector('.SkinCoffee2-cost');
    let levelElement = document.querySelector('.SkinCoffee2-level');

    let parsedSkinCost = parseFloat(costElement.innerHTML.replace(/\s/g, '').replace(',', '.'));

    if (parsedCoffe >= parsedSkinCost) {
        parsedCoffe -= parsedSkinCost;
        totalCoffeSpent += parsedSkinCost;
        coffe.innerHTML = Math.round(parsedCoffe);

        levelElement.innerHTML++;

       
        skinImage.src = "./assets/skin2.png";

       
        parsedSkinCost *= 1.2;
        costElement.innerHTML = Math.round(parsedSkinCost);

        updateStats();
    } else {
        const popup = document.getElementById('game-popup');
        const popupMessage = document.getElementById('popup-message');
        popupMessage.textContent = "No cappuccino for u go get that money!!";
        popup.style.display = 'block';

        const closeBtn = document.getElementById('popup-close-btn');
        closeBtn.onclick = function () {
            popup.style.display = 'none';
        }
    }
}

function buySkinCoffee3() {
    let costElement = document.querySelector('.SkinCoffee3-cost');
    let levelElement = document.querySelector('.SkinCoffee3-level');

    let parsedSkinCost = parseFloat(costElement.innerHTML.replace(/\s/g, '').replace(',', '.'));

    if (parsedCoffe >= parsedSkinCost) {
        parsedCoffe -= parsedSkinCost;
        totalCoffeSpent += parsedSkinCost;
        coffe.innerHTML = Math.round(parsedCoffe);

        levelElement.innerHTML++;

       
        skinImage.src = "./assets/skin3.png";

       
        parsedSkinCost *= 1.2;
        costElement.innerHTML = Math.round(parsedSkinCost);

        updateStats();
    } else {
        const popup = document.getElementById('game-popup');
        const popupMessage = document.getElementById('popup-message');
        popupMessage.textContent = "No delicious coffee vanilla  for u go get that money!!";
        popup.style.display = 'block';

        const closeBtn = document.getElementById('popup-close-btn');
        closeBtn.onclick = function () {
            popup.style.display = 'none';
        }
    }
}

function buySkinCoffee4() {
    let costElement = document.querySelector('.SkinCoffee4-cost');
    let levelElement = document.querySelector('.SkinCoffee4-level');

    let parsedSkinCost = parseFloat(costElement.innerHTML.replace(/\s/g, '').replace(',', '.'));

    if (parsedCoffe >= parsedSkinCost) {
        parsedCoffe -= parsedSkinCost;
        totalCoffeSpent += parsedSkinCost;
        coffe.innerHTML = Math.round(parsedCoffe);

        levelElement.innerHTML++;

       
        skinImage.src = "./assets/skin4.png";

       
        parsedSkinCost *= 1.2;
        costElement.innerHTML = Math.round(parsedSkinCost);

        updateStats();
    } else {
        const popup = document.getElementById('game-popup');
        const popupMessage = document.getElementById('popup-message');
        popupMessage.textContent = "No delicious Tea  for u go get that money!!";
        popup.style.display = 'block';

        const closeBtn = document.getElementById('popup-close-btn');
        closeBtn.onclick = function () {
            popup.style.display = 'none';
        }
    }
}

