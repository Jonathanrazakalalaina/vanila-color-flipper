const colors = ["green", "red", "rgba(133,122,200)", "#fdf808"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

function getRandomNumber() {
    //donne des nombre aléatoire entre 0 et 3
    return Math.floor(Math.random() * colors.length);
}