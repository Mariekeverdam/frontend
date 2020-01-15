

var hamburgermenu = document.querySelector('.burger');
var showmenu = document.querySelector('.nav-links');

function show(){
    showmenu.classList.toggle('nav-active');
}

hamburgermenu.addEventListener('click', show);