// Your code goes here
const imgSelect = document.querySelectorAll('img');
imgSelect.forEach((img) => {
    img.addEventListener('mouseenter', (e) => {
        e.target.style.transition = 'transform .2s';
        e.target.style.transform = 'scale(1.05)'
    });
    img.addEventListener('mouseleave', (e) => {
        e.target.style.transition = 'transform .2s';
        e.target.style.transform = 'scale(1)';
    });
});

document.addEventListener('auxclick', (e) => {
    e.target.style.border = '2px solid lightblue';
});

document.addEventListener('dblclick', (e) => {
    e.target.style.border = 'none';
});

const headers = document.querySelectorAll('h2');
headers.forEach((h2) => {
    h2.addEventListener('click', (e) => {
        e.target.style.color = '#ffd800';
        e.stopPropagation();
    });
});

document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        // 1 = red
        case 49: 
            document.querySelector('*').style.color = 'red';
            break;
        // 2 = blue
        case 50: 
            document.querySelector('*').style.color = 'blue';
            break;
        // 3 = green
        case 51: 
            document.querySelector('*').style.color = 'green';
            break;
        // 4 = black
        case 52: 
            document.querySelector('*').style.color = 'black';
            break;
    }
});

const signUpBtn = document.querySelectorAll('.btn');
const btns = Array.from(signUpBtn);
btns.forEach((button) => {
    button.addEventListener('mouseover', (e) => {
        switch (btns.indexOf(button)) {
            case 0:
                document.querySelectorAll('.destination')[0].style.background = 'lightblue';
                break;
            case 1:
                document.querySelectorAll('.destination')[1].style.background = 'lightblue';
                break;
            case 2:
                document.querySelectorAll('.destination')[2].style.background = 'lightblue';
                break;
        }
    });
    button.addEventListener('mouseout', (e) => {
        switch (btns.indexOf(button)) {
            case 0:
                document.querySelectorAll('.destination')[0].style.background = 'white';
                break;
            case 1:
                document.querySelectorAll('.destination')[1].style.background = 'white';
                break;
            case 2:
                document.querySelectorAll('.destination')[2].style.background = 'white';
                break;
        }
    });
});

imgSelect[0].addEventListener('load', (e) => {
    alert('Welcome to Fun Bus!!!');
});

const contentSection = document.querySelectorAll('.content-section');
contentSection.forEach((div) => {
    div.addEventListener('click', (e) => {
        div.style.color = 'red';
    });
});

const navSelect = document.querySelectorAll('nav a');
navSelect.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
    });
});