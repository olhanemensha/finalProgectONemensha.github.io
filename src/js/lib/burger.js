const burgerBtn = document.querySelector(".burger__menu");
const menu = document.querySelector('.menu__list');
const close = document.querySelector('.burger__cl');
burgerBtn.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.add('burger__open');
    menu.classList.add('menu__bur');
    close.classList.add('close__active');
});

close.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("asdfgw");
    burgerBtn.classList.remove('burger__open');
    menu.classList.remove('menu__bur');
    this.classList.remove('close__active');
});