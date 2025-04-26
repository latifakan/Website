const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
    "/images/img7.jpg",
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg"
];

function openPDF() {
    window.open('/images/Lebenslauf.pdf', '_blank');
}

const buttons = document.querySelectorAll('button');
let getImg = document.querySelector('img');
let count = 1;

buttons.forEach((button, index) => {
    console.log(button);
    console.log(index);
    if (button.addEventListener('onclick', function() {
        console.log('${index}, ${button}')
    }));
});

function scrollProjects() {
    document.getElementById("project").scrollIntoView();
}

function scrollStart() {
    document.getElementById("start").scrollIntoView();
}

function dropDown() {
    document.getElementById("socials-dropdown").classList.toggle("show");
}