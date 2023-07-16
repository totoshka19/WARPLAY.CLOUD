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
    })
}

function removeActiveLink() {
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('nav-link-active');
    }
}

// Установка активного тарифа



