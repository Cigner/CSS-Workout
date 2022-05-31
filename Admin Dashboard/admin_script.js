let list = document.querySelectorAll('.navigation li');
function ActiveLink(){
    list.forEach((item) => item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item) => item.addEventListener('mouseover', ActiveLink));


let toggle1 = document.querySelector('.toggle1');
let toggle2 = document.querySelector('.toggle2');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle1.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

toggle2.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

// LIGHT / DARK MODE

const mode = document.getElementById('mode');
const root = document.querySelector(':root');

mode.onclick = function(){
    mode.classList.toggle('switch');
    root.classList.toggle('switch');
}