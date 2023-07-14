const menuBtn = document.querySelector(".menu-btn");
//const menuBtnClose = document.querySelector(".menu-btn-close");
const menuMobile = document.querySelector(".menu-mobile");

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('open');
    menuBtn.classList.toggle('active');
    // menuBtn.style.zIndex = '30';

});

// menuBtnClose.addEventListener('click', () => {
//     menuMobile.classList.remove('open');
//     menuBtnClose.style.zIndex = '10'
//
// });


// menuBtn.onclick = function () {
//     alert("Вы нажали на кнопку");
// }
