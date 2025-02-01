const randomColor = () => {
    const red = Math.floor(Math.random() * 256) + 1;
    const green = Math.floor(Math.random() * 256) + 1;
    const blue = Math.floor(Math.random() * 256) + 1;
    return  `rgb(${red}, ${green}, ${blue})`;
}

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        this.style.backgroundColor = randomColor();
    });
}