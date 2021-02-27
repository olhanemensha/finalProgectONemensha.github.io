let list = document.querySelectorAll('.choose__link');
list = Array.prototype.slice.call(list, 0);
list.forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        let tab = document.querySelector(item.getAttribute('href'));
        document.querySelector('#tabNav .act')
            .classList.remove('act');
        document.querySelector('#tabsWrap .act')
            .classList.remove('act');
        item.classList.add('act');
        tab.classList.add('act');
    })
})