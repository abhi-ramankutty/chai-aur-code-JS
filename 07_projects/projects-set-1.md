# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
const btnList = document.querySelectorAll('.button');
const body = document.querySelector('body');

for (let btn of btnList) {
  btn.addEventListener('click', (a) => {
    const colorId = a.target.id;
    body.style.backgroundColor = colorId;
  });
}
```

## project 2 solution

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const height = parseInt(document.querySelector('#height')?.value);
	const weight = parseInt(document.querySelector('#weight')?.value);
	const results = document.querySelector('#results');

	if (!height || height < 0) {
		results.innerHTML = `Please enter a valid height ${height}`;
	} else if (!weight || weight < 0) {
		results.innerHTML = `Please enter a valid weight ${weight}`;
	} else {
		const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
		let status = '';
		if (bmi < 18.6) {
			status = 'you are Underweight';
		} else if (bmi > 24.9) {
			status = 'you are Overweight';
		} else {
			status = 'you are in Norman range';
		}
		results.innerHTML = `${bmi}, ${status}`;
	}
});

```

## project 3 solution code

```javascript
const clock = document.querySelector('#clock');
setInterval(() => {
	const date = new Date();
	const localeTime = date.toLocaleTimeString();
	clock.innerHTML = localeTime;
}, 1000);
```

## project 4 solution


```javascript
// console.log("Soln by Abhilash")
// const randomNum = Math.round(Math.floor(Math.random() * 100) + 1);
// console.log('randomNum', randomNum);
// const guesses = document.querySelector('.guesses');
// const lastResult = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');

// const form = document.querySelector('form');
// form.addEventListener('submit', (event) => {
// 	event.preventDefault();

// 	const guessValue = parseInt(document.querySelector('#guessField').value);
// 	if (!guessValue || guessValue < 1 || guessValue > 100) {
// 		lowOrHi.innerHTML = `Please enter a valid number between 1 & 100`;
// 		return;
// 	}

// 	if (guessValue === randomNum) {
// 		lowOrHi.innerHTML = `Yay! You got the number ${randomNum}`;
// 	} else {
// 		guesses.append(guesses.innerHTML ? `, ${guessValue}` : `${guessValue}`);
// 		lastResult.innerHTML = --lastResult.innerHTML;
// 		if (lastResult.innerHTML <= 0) {
// 			const subt = document.getElementById('subt');
// 			subt.style.pointerEvents = `none`;
// 			subt.style.opacity = 0.5;
// 			lowOrHi.innerHTML = 'Oops! You ran out of tries...';
// 			return;
// 		}
// 		if (guessValue < randomNum) {
// 			lowOrHi.innerHTML = 'Entered value is lower';
// 		} else {
// 			lowOrHi.innerHTML = 'Entered value is higher';
// 		}
// 	}
// });

console.log('Soln by Hitesh');
const randomNum = Math.round(Math.floor(Math.random() * 100) + 1);
console.log('randomNum', randomNum);

const submitBtn = document.getElementById('subt');
const userInput = document.querySelector('#guessField');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');

const prevGuesses = [];

let playGame = true;

if (playGame) {
	submitBtn.addEventListener('click', (event) => {
		event.preventDefault();
		const userInputVal = parseInt(userInput.value);
		validateGuess(userInputVal);
	});
}

function validateGuess(guessValue) {
	if (isNaN(guessValue) || guessValue < 1 || guessValue > 100) {
		displayMsg(`Please enter a valid number between 1 & 100`);
	} else {
		userInput.value = '';
		if (lastResult.innerHTML > 0) {
			guesses.append(
				guesses.innerHTML ? `, ${guessValue}` : `${guessValue}`
			);
			lastResult.innerHTML = --lastResult.innerHTML;
			checkGuess(guessValue);
		} else {
			displayMsg(`Game Over. Random number was ${randomNum}`);
			endGame();
		}
	}
}
function checkGuess(guessValue) {
	if (randomNum > guessValue) {
		displayMsg(`${guessValue} is Too Low`);
	} else if (randomNum < guessValue) {
		displayMsg(`${guessValue} is Too High`);
	} else {
		displayMsg(`Yay... You guessed the correct number - ${guessValue}`);
		endGame();
	}
}

function displayMsg(message) {
	lowOrHi.innerHTML = `<h4>${message}</h4>`;
}
function endGame() {
	userInput.setAttribute('disabled', 'true');
	submitBtn.setAttribute('disabled', 'true');
	const btn = document.createElement('button');
	btn.innerHTML = `Start new game`;
	btn.setAttribute('id', 'newGame');
	resultParas.appendChild(btn);
	playGame = true;
	newGame();
}

function newGame() {
	const btn = document.querySelector('#newGame');
	btn.addEventListener('click', () => {
		guesses.innerHTML = '';
		userInput.value = '';
		lastResult.innerHTML = 10;
		userInput.value = '';
		userInput.removeAttribute('disabled');
		submitBtn.removeAttribute('disabled');
		playGame = true;
	});
}

```


# Project 5 solution

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```

# Project 6 Solution

```javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```