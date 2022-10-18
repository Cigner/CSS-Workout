let buttons = document.getElementsByTagName('button')
let display = document.getElementById('display');

let characters = document.getElementById('characters');
let numbers = document.getElementById('numbers');

let numButton = document.getElementById('nums');
let charButton = document.getElementById('chars');

let container = document.getElementById('container');
let body = document.querySelector('body');


document.body.addEventListener('keydown' , function(index) {
    let x = index.key;
    if(index.ctrlKey && x == "b") {
        if(window.getComputedStyle(body).getPropertyValue('font-family') === 'Cyberway') {
            body.style.setProperty('font-family', 'Simplecat', '');
        } else {
            body.style.setProperty('font-family', 'Cyberway', '');
        }
    } else {
        for (let i = 0; i < buttons.length ; i++) {
            if (buttons[i].innerHTML.toLowerCase() == index.key.toLowerCase()){
                HandleKey(buttons[i])
                break
            }
        }
    }
})

document.body.addEventListener('keyup' , function(index) {
    
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].innerHTML.toLowerCase() == index.key.toLowerCase()){
                buttons[i].classList.remove('active')
                break
            }
        }
})

for (let b of buttons){
    b.addEventListener('mousedown' , function() {
        HandleKey(b)
    })

    b.addEventListener('mouseup' , function() {
        ChangeClass(b, '')
    })
}

function HandleKey(key) {
    ChangeClass(key, 'active')

    if (key.id == 'backspace') {
        display.innerHTML = display.innerHTML.slice(0 , -1)
        return
    }

    if (key.id == 'nums') {
        ChangeClass(characters, "hidden")
        ChangeClass(numbers, "")
        numButton.removeAttribute("class")
        return
    }

    if (key.id == 'chars') {
        ChangeClass(characters, "")
        ChangeClass(numbers, "hidden")
        charButton.removeAttribute("class")
        return
    }

    if (key.id == 'enter') {
        return
    }

    if (display.innerHTML.length < 8) {
        display.innerHTML += key.innerHTML
    }
}

function ChangeClass(object, className) {
    object.className = className
}

window.addEventListener("resize", () => {
    let widthPercentage = window.innerWidth / 1920;
    let heightPercentage = window.innerHeight / 1080;
    if(widthPercentage >= heightPercentage) {
        container.style.setProperty("transform", `scale(${heightPercentage * 125}%)`, 'important');
    } else {
        container.style.setProperty("transform", `scale(${widthPercentage * 125}%)`, 'important');
    }
})

window.addEventListener("load", () => {
    let widthPercentage = window.innerWidth / 1920;
    let heightPercentage = window.innerHeight / 1080;
    if(widthPercentage >= heightPercentage) {
        container.style.setProperty("transform", `scale(${heightPercentage * 125}%)`, 'important');
    } else {
        container.style.setProperty("transform", `scale(${widthPercentage * 125}%)`, 'important');
    }
})