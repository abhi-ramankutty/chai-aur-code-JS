# Projects related to DOM - Chai aur Code

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-dmaret?file=index.html)

# Solution code

## project 1

``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((btn) => {
  btn.style.backgroundColor = btn.id;
  btn.style.cursor = 'pointer';

  btn.addEventListener('click', (event) => {
    body.style.backgroundColor = event.target.id;
  });
});
```

## project 2
``` javascript
const form = document.querySelector('form');
const result = document.querySelector('#results');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const height = parseInt(form.height.value) / 100;
  const weight = parseInt(form.weight.value);

  if (isNaN(height) || !height) {
    result.innerHTML = `Please enter a valid height! - ${height}`;
    return;
  }
  if (isNaN(weight) || !weight) {
    result.innerHTML = `Please enter a valid weight! - ${weight}`;
    return;
  }
  const BMI = (weight / height ** 2).toFixed(2);
  let statusMsg = '';
  if (BMI < 18.6) {
    statusMsg = 'You are under-weight :(';
  } else if (BMI > 24.9) {
    statusMsg = 'You are over-weight :(';
  } else {
    statusMsg = 'Congrats... You BMI is normal :)';
  }
  result.innerHTML = `<div>Your BMI is ${BMI}</div><div>${statusMsg}</div>`;
});
```

## project 3
``` javascript
const clock = document.querySelector('#clock');

setInterval(() => {
    const date = new Date();
  const time = date.toLocaleTimeString();
  clock.innerHTML = time;
}, 1000);
```

## project 4
``` javascript
const form = document.querySelector('form');
const prevGuessElem = document.querySelector('.resultParas .guesses');
const remainingGuessElem = document.querySelector('.resultParas .lastResult');
const msg = document.querySelector('.resultParas .lowOrHi');

let randomNum = Math.floor(Math.random() * 100) + 1;
let remainingGuess = 10;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputGuess = parseInt(form.guessField.value);

  if (isNaN(inputGuess) || !inputGuess) {
    displayMsg('Enter a valid number between 0 and 100');
    return;
  }
  checkTheGuess(inputGuess);
});

function checkTheGuess(inputGuess) {
  remainingGuess = --remainingGuess;
  updateData(remainingGuess, inputGuess);

  if (remainingGuess > 0) {
    if (inputGuess === randomNum) {
      displayMsg(
        `Congrats... The random number was ${randomNum} <div id="startOver">Start over</div>`
      );
      endGame();
      return;
    } else if (inputGuess > randomNum) {
      displayMsg(`Oops! Number is TOO high`);
    } else {
      displayMsg(`Oops! Number id TOO low`);
    }
  } else {
    displayMsg(
      `<div>Oops! You are out of guesses :( </div><div id="startOver">Start over</div>`
    );
    endGame();
  }
}

function updateData(remainingGuessCount, prevGuess) {
  remainingGuessElem.innerHTML = remainingGuessCount;
  prevGuessElem.innerHTML += `${prevGuess}, `;
}

function displayMsg(inputMsg) {
  msg.innerHTML = `<h2>${inputMsg}</h2>`;
}

function endGame() {
  form.guessField.value = '';
  form.guessField.setAttribute('disabled', true);
  form.subt.setAttribute('disabled', true);

  const startOver = document.querySelector('#startOver');
  startOver.style.cursor = 'pointer';
  startOver.addEventListener('click', startOverGame);
}

function startOverGame() {
  randomNum = Math.floor(Math.random() * 100) + 1;
  remainingGuess = 10;
  remainingGuessElem.innerHTML = remainingGuess;
  prevGuessElem.innerHTML = '';
  form.guessField.removeAttribute('disabled');
  form.subt.removeAttribute('disabled');
}
```