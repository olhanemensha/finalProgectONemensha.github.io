import {
    myAjax
} from './ajax';
myAjax('GET', 'https://www.thecocktaildb.com/api/json/v1/1/random.php', dataRandom);

function dataRandom(data) {
    addRandom(data);
}
const btn = document.querySelector('.random__btn');
btn.addEventListener('click', function(event) {
    event.preventDefault();
    removeRandom();
    myAjax('GET', 'https://www.thecocktaildb.com/api/json/v1/1/random.php', dataRandom);

    function dataRandom(data) {
        addRandom(data);
    }
})

function addRandom(data) {
    const div = document.createElement('div');
    div.classList.add("remove");
    document.querySelector(".random__info").appendChild(div);
    let img = document.createElement('img');
    let h = document.createElement('h3');
    h.innerText = data.drinks[0].strDrink;
    h.classList.add("random__info_item")
    img.classList.add("random__img");
    img.src = data.drinks[0].strDrinkThumb;
    img.alt = "random";
    div.appendChild(h);
    div.appendChild(img);
}

function removeRandom() {
    const div = document.querySelector('.remove');
    div.remove();
}