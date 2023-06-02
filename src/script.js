let randomNumber
let startGame = document.getElementById('startgame')
let image = document.getElementById('imagecat')
let div = document.getElementById('hiddendiv')
let pEl = document.getElementById('pel')
let h1El =document.getElementById('h1el')

startGame.addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1
    console.log(randomNumber)
    image.classList.add('hidden')
    pEl.classList.add('hidden')
    div.classList.remove('mt-20')
    h1El.classList.remove('hidden')
    setTimeout(guessNumber, 100);
})



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
        image.classList.remove('hidden')
        pEl.classList.remove('hidden')
        h1El.classList.add('hidden')
        div.classList.add('mt-20')
    }
}




