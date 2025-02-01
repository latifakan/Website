const playerOne = document.querySelector('#playerOne');
const playerTwo = document.querySelector('#playerTwo');
const p1Win = document.querySelector('#p1Score');
const p2Win = document.querySelector('#p2Score');
const reset = document.querySelector('#reset');
const select = document.querySelector('select');
let h1 = document.querySelector('h1');
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let roundNumber = 5;

if (!isGameOver) {
    playerOne.addEventListener('click', function() {
        p1Score++;
        console.log(`p1Score: ${p1Score}, playing to: ${roundNumber}`)
        if (p1Score === roundNumber) {
            console.log(roundNumber)
            p1Win.style.color = 'green';
            isGameOver = true;
            playerOne.disabled = true
            playerTwo.disabled = true
        }
        p1Win.innerText = `${p1Score}`;
    });
    
    playerTwo.addEventListener('click', function() {
        p2Score++;
        if (p2Score === roundNumber) {
            p2Win.style.color = 'green';
            isGameOver = true;
            playerOne.disabled = true
            playerTwo.disabled = true
        }    
        p2Win.innerText = `${p2Score}`;
    });
    
    reset.addEventListener('click', function() {
        p1Win.innerText = 0;
        p1Win.style.color = 'black';
        p2Win.innerText = 0;
        p2Win.style.color = 'black';
        p1Score = 0;
        p2Score = 0;
        playerOne.disabled = false;
        playerTwo.disabled = false;
    });
    
    select.addEventListener('change', function(evt) {
        roundNumber = parseInt(evt.target.value);
        console.log(`Playing number changed: ${roundNumber}`)
    });
}