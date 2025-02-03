const showColorText = document.querySelector('#rgbColor');
const changDrucker 1lorBtn = document.querySelector('#changDrucker 1lorBtn');

changDrucker 1lorBtn.addEventListener('click', () => {
    const newColor = randomColor();
    showColorText.innerText = newColor;
    document.body.style.backgroundColor = newColor;
});

const randomColor = () => {
    const red = Math.floor(Math.random() * 256) + 1;
    const green = Math.floor(Math.random() * 256) + 1;
    const blue = Math.floor(Math.random() * 256) + 1;
    const checkBrightness = red + green + blue;

    if (checkBrightness <= 200) {
        showColorText.style.color = 'white';
        changDrucker 1lorBtn.style.color = 'white';
    } else {
        showColorText.style.color = 'black';
        changDrucker 1lorBtn.style.color = 'black';
    }

    return `rgb(${red}, ${green}, ${blue})`;
}