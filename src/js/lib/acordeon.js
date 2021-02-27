let plus = document.querySelectorAll('.question__open');
let minus = document.querySelectorAll('.question__close');
let text = document.querySelectorAll('.question__answer')
plus = Array.prototype.slice.call(plus, 0);
minus = Array.prototype.slice.call(minus, 0);
text = Array.prototype.slice.call(text, 0);

plus.forEach(function(item, index) {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        text[index].classList.add('active');
        this.classList.remove('active');
        minus[index].classList.add('active');
    })
})

minus.forEach(function(item, index) {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        text[index].classList.remove('active');
        this.classList.remove('active');
        plus[index].classList.add('active');
    })
})