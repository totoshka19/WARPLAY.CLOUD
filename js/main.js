// Показ/скрытие мобильного меню
const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".menu-mobile");

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('open');
    menuBtn.classList.toggle('active');
});

// Установка активной ссылки в навигации
const navLinks = document.querySelectorAll(".nav-link");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        removeActiveLink();
        navLinks[i].classList.add('nav-link-active');
    });
}

function removeActiveLink() {
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('nav-link-active');
    }
}

// Установка активного тарифа
const tariffBtns = document.querySelectorAll(".btn-tariff");
const tariffItems = document.querySelectorAll(".tariff-item");
const tariffTitle = document.querySelectorAll(".tariff-title");
const tariffPrices = document.querySelectorAll(".tariff-price");
const tariffLists = document.querySelectorAll(".tariff-list");

for (let i = 0; i < tariffBtns.length; i++) {
    tariffBtns[i].addEventListener('click', () => {
        removeActiveStyle();
        tariffBtns[i].classList.add('active');
        tariffItems[i].classList.add('active');
        tariffTitle[i].classList.add('active');
        tariffPrices[i].classList.add('active');
        tariffLists[i].classList.add('active');
    });
}

function removeActiveStyle() {
    for (let i = 0; i < tariffBtns.length; i++) {
        tariffBtns[i].classList.remove('active');
        tariffItems[i].classList.remove('active');
        tariffTitle[i].classList.remove('active');
        tariffPrices[i].classList.remove('active');
        tariffLists[i].classList.remove('active');
    }
}




