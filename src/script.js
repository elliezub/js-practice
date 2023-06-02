let randomNumber = Math.floor(Math.random() * 100) + 1
let startGame = document.getElementById('startgame')

startGame.addEventListener('click', function() {
    location.reload()
})

console.log(randomNumber)

let guess = null

function guessNumber() {
   
    let input = prompt('whats your guess?')
    
    if (input === null) {
        alert('Game ended')
        return;
    } 
    
    let guess = Number(input)

    if (isNaN(guess) || guess > 100) {
        alert(`please enter a number 1-100!`)
        guessNumber();
    } else if (guess > randomNumber) {
        alert('too high!')
        guessNumber();
    } else if (guess < randomNumber) {
        alert('too low!')
        guessNumber();
    } else if (guess === randomNumber) {
        alert('you got it!!!!')
    }
}

guessNumber();

   

