const showColorText = document.querySelector('#rgbColor');
const changeColorBtn = document.querySelector('#changeColorBtn');

changeColorBtn.addEventListener('click', () => {
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
        changeColorBtn.style.color = 'white';
    } else {
        showColorText.style.color = 'black';
        changeColorBtn.style.color = 'black';
    }

    return `rgb(${red}, ${green}, ${blue})`;
}