import {
    myAjax
} from './ajax';
let input = document.querySelectorAll('.block__input');
input = Array.prototype.slice.call(input, 0);
const h = document.createElement('h');
h.classList.add('block__info');
h.classList.add('clear');
h.innerText = "Unfortunately, there is no information";

let form = document.querySelectorAll('.block__form');
form = Array.prototype.slice.call(form, 0);
let searchName = '';
console.log(form);
form.forEach(function(item, index) {
    item.addEventListener('submit', function(event) {
        event.preventDefault();
        const clear = document.querySelector('.clear');
        if (clear !== null) {
            clearSeach(clear);
        }
        searchName = this[0].value;

        if (index === 0) {
            if (searchName === '') {
                input[0].classList.add('error');
                input[0].placeholder = "Error,enter coctail name"
            } else {
                input[0].classList.remove('error');
                myAjax('GET', `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchName}`, dataSeach);

                function dataSeach(data) {
                    if (data.drinks === null) {
                        const div = document.createElement('div');
                        div.classList.add('block__result');
                        document.querySelector(".block__red").appendChild(div);
                        div.appendChild(h);
                    } else {
                        const div = document.createElement('div');
                        div.classList.add('block__result');
                        div.classList.add('clear');
                        document.querySelector(".block__red").appendChild(div);
                        for (let i = 0; i <= 4; i++) {
                            let a = document.createElement('a');
                            a.innerText = data.drinks[i].strDrink;
                            a.href = data.drinks[i].strDrinkThumb;
                            a.classList.add('block__link');
                            div.appendChild(a);
                        }
                        input[0].value = "";
                    }
                }
            }
        } else if (index === 1) {
            if (searchName === '') {
                input[1].classList.add('error');
                input[1].placeholder = "Error,enter name of ingridient"
            } else {
                input[1].classList.remove('error');
                myAjax('GET', `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${searchName}`, ingSeach);

                function ingSeach(data) {
                    console.log(data.ingredients);
                    if (data.ingredients === null) {
                        const div = document.createElement('div');
                        div.classList.add('block__result');
                        document.querySelector(".block__blue").appendChild(div);
                        div.appendChild(h);
                    } else {
                        const div = document.createElement('div');
                        div.classList.add('block__result');
                        div.classList.add('clear');
                        document.querySelector(".block__blue").appendChild(div);
                        let h = document.createElement('h');
                        h.innerText = data.ingredients[0].strDescription;
                        h.classList.add('block__text');
                        div.appendChild(h);
                        input[1].value = "";
                    }
                }
            }
        }
    })
})

function clearSeach(div) {
    div.remove();
}