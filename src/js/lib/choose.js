import {
    myAjax
} from './ajax';
myAjax('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink', dataOrg);

function dataOrg(data) {
    for (let i = 0; i <= 7; i++) {
        const div = document.createElement('div');
        div.classList.add("choose__add");
        document.querySelector("#tab1").appendChild(div);
        let img = document.createElement('img');
        let h = document.createElement('h3');
        let drinkName = data.drinks[i].strDrink;
        h.innerText = drinkName;
        h.classList.add("choose__item")
        img.classList.add("choose__img");
        img.src = data.drinks[i].strDrinkThumb;
        img.alt = "random";
        div.appendChild(h);
        div.appendChild(img);
    }
}

myAjax('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic', dataAlc);

function dataAlc(data) {
    for (let i = 0; i <= 7; i++) {
        const div = document.createElement('div');
        div.classList.add("choose__add");
        document.querySelector("#tab2").appendChild(div);
        let img = document.createElement('img');
        let h = document.createElement('h3');
        let drinkName = data.drinks[i].strDrink;
        h.innerText = drinkName;
        h.classList.add("choose__item")
        img.classList.add("choose__img");
        img.src = data.drinks[i].strDrinkThumb;
        img.alt = "random";
        div.appendChild(h);
        div.appendChild(img);
    }
}

myAjax('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic', dataNonAlco);

function dataNonAlco(data) {
    for (let i = 0; i <= 7; i++) {
        const div = document.createElement('div');
        div.classList.add("choose__add");
        document.querySelector("#tab3").appendChild(div);
        let img = document.createElement('img');
        let h = document.createElement('h3');
        let drinkName = data.drinks[i].strDrink;
        h.innerText = drinkName;
        h.classList.add("choose__item")
        img.classList.add("choose__img");
        img.src = data.drinks[i].strDrinkThumb;
        img.alt = "random";
        div.appendChild(h);
        div.appendChild(img);
    }
}