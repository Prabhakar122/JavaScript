// setInterval(function (rand) {
//     const randNum = parseInt(Math.random() * 100 + 1)
//     console.log(randNum);
// }, 1000)

let randNum = generateRandNum()
    const submitButton = document.querySelector('#submit');
    const input = document.querySelector('#guessedNum');
    const message = document.querySelector('.lowOrHi');
    const prevGuessSlot = document.querySelector('.guesses')
    const remainingGuess = document.querySelector('.lastresult')
    const resultSlot = document.querySelector('.results');
    
    let playGame = true;
    let initialGuess = 1;
    let prevGuess = [];
    // let counter = 1;
    
    // console.log(`random: ${randNum} counter: ${counter}`);
    const gameOver = document.createElement('h2');
    
    if (playGame) {
        submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        const inputValue = input.value;
        validateGuess(inputValue);
    });
}

function generateRandNum() {
    let generatedRandNum = parseInt(Math.random() * 100 + 1);
    return generatedRandNum;
}
function validateGuess(guess){
    // if (guess.include('.')) {
    //     alert(`Enter a integer value`)
    // } 
    if (isNaN(guess)) {
        alert(`Enter a valid Number`)
    }else if (guess === '') {
        alert(`Enter a Number`)
    } else if (guess < 1) {
        alert(`Enter a number greater than 1`)
    }else if (guess > 100) {
        alert(`Enter a number less than 100`)
    }else{
        displayGuess(guess);
        if (initialGuess >= 1 && initialGuess <= 10) {
            checkGuess(guess);
        } else {
            displayMSG(`Game Over. Random number was ${randNum}`)
            endGame()
        }
    }
}

function checkGuess(guess) {
    if (guess == randNum) {
        displayMSG(`You won the game`)
        endGame();
    }else if (guess < randNum) {
        displayMSG(`Your is guess is too low`)
    }else{
        displayMSG(`your guess is too high`)
    }
}

function displayGuess(guess) {
    input.value = '';
    prevGuess.push(guess);
    prevGuessSlot.innerHTML = prevGuess.join(', ');
    initialGuess++
    remainingGuess.innerHTML = (11 - initialGuess)
}

function displayMSG(msg) {
    message.innerHTML = msg;
}

function endGame() {
    input.setAttribute('disabled', '')
    gameOver.innerHTML = `Start a New Game`;
    resultSlot.appendChild(gameOver)
    playGame = false
    newGame();
}

function newGame() {
    gameOver.addEventListener('click', function (event) {
        
        randNum = generateRandNum();
        prevGuess = []
        initialGuess = 1;
        prevGuessSlot.innerHTML = prevGuess;
        remainingGuess.innerHTML = 10;
        displayMSG(``)
        input.removeAttribute('disabled')
        resultSlot.removeChild(gameOver)
        playGame = true;
        // counter++;
        // console.log(`random: ${randNum} counter: ${counter}`);
        // console.log("endgame called");
        
    }, {once: true})
}
