const popupOpen = document.querySelector('.popup__open');
const popupClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const page = document.querySelector('.page');
const overlay = document.querySelector('#overlay');
popupOpen.addEventListener('click', openWindow);
let isOpen = false;


function openWindow(event) {
    event.preventDefault();
    popup.style.display = "block";
    overlay.style.display = "block";
    page.style.overflow = "hidden";
    isOpen = true;
}

popupClose.addEventListener('click', closeWindow);

function closeWindow(event) {
    event.preventDefault();
    popup.style.display = "";
    overlay.style.display = "none";
    page.style.overflow = "";
    isOpen = false;
}