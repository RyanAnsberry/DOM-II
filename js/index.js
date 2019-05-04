// Your code goes here
const imgSelect = document.querySelectorAll('img');
imgSelect.forEach((img) => {
    img.addEventListener('mouseenter', (e) => {
        e.target.style.transition = 'transform .2s';
        e.target.style.transform = 'scale(1.05)'
        e.target.style.zIndex = '-1';
    });
    img.addEventListener('mouseleave', (e) => {
        e.target.style.transition = 'transform .2s';
        e.target.style.transform = 'scale(1)';
        e.target.style.zIndex = '-1';
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
    });
});

document.addEventListener('keydown', (e) => {
});
