const menu = document.querySelector('.menu');
const menuBtn = document.querySelectorAll('.menu__btn');

menuBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('open');
        menu.classList.toggle('open');
    })
})