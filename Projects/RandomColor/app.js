const h2 = document.querySelector('h2');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const newColor = randomColor();
    h2.innerText = newColor;
    document.body.style.backgroundColor = newColor;
});

const randomColor = () => {
    const red = Math.floor(Math.random() * 256) + 1;
    const green = Math.floor(Math.random() * 256) + 1;
    const blue = Math.floor(Math.random() * 256) + 1;
    const checkBrightness = red + green + blue;

    if (checkBrightness <= 200) {
        h2.style.color = 'white';
        button.style.color = 'white';
    } else {
        h2.style.color = 'black';
        button.style.color = 'black';
    }

    return `rgb(${red}, ${green}, ${blue})`;
}