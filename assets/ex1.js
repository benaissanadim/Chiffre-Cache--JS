let guesses = document.querySelector('.guesses');

let lastResult = document.querySelector('.lastResult');

let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');

let guessField = document.querySelector('.guessField');

let guessCount = 1;
let maxcount = 1 ;
let resetButton;
alert('choisissez le niveau de difficulté ');

let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess(){
    let userGuess = Number(guessField.value);
    if (guessCount === 1){
        guesses.textContent = 'Propositions précédentes : ';
    }
    guesses.textContent += userGuess +' ';

    if (userGuess === randomNumber){
        alert('bravo, vous avez trouvé le nombre :)' );
        lastResult.textContent = 'Bravo, vous avez trouvé le nombre !';
        lastResult.style.backgroundColor = 'green';
        setGameOver();
    }
    else if(guessCount === maxcount){
        alert('Perdu :(');
         lastResult.textContent = ' PERDU :( ';
        setGameOver();
    }
    else {
         lastResult.textContent = ' Faux ';
         lastResult.style.backgroundColor = 'red';
         if (userGuess <randomNumber){
             alert('le nombre saisi est trop petit ');
         }else if(userGuess > randomNumber){
             alert('le nombre saisi est trop grand ');
         }
    }
    guessCount++;
    guessField.value ='';
    guessField.focus();
    
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  let resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 10) + 1;
}

function facilefn(){
    maxcount = 5 ;
    alert ('niveau facile');
}
function difficilefn(){
    maxcount = 3 ;
    alert ('niveau difficile');
}
//niveaufacile.addEventListener('click' , facilefn);
//niveaufacile.addEventListener('click' , difficilefn);
guessSubmit.addEventListener('click' , checkGuess);

