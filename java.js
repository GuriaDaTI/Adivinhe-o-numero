let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function makeGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const guess = parseInt(guessInput.value);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Por favor, insira um número válido entre 1 e 100.";
    } else if (guess === randomNumber) {
        message.textContent = `Parabéns! Você adivinhou o número ${randomNumber} em ${attempts} tentativas.`;
        endGame();
    } else if (guess < randomNumber) {
        message.textContent = "Tente um número maior!";
    } else {
        message.textContent = "Tente um número menor!";
    }
}

function endGame() {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
    document.getElementById('resetButton').style.display = 'block';
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessInput').disabled = false;
    document.querySelector('button').disabled = false;
    document.getElementById('message').textContent = "";
    document.getElementById('guessInput').value = "";
    document.getElementById('resetButton').style.display = 'none';
}
