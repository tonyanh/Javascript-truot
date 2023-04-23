let menus = document.querySelectorAll('.title');
let openText = document.querySelectorAll('.mtText');
menus.forEach((el) => {
    el.addEventListener('click', (e) => { 
        console.log(e.nextElementSibling);
        remover();
        el.nextElementSibling.classList.toggle('active');
    });
})

function remover() {
    openText.forEach((el) => {
        ele.classList.remover("active");
})
}