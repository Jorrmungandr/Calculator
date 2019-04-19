//The main html elements
const calc = document.querySelector('#calculator');
const functions = document.querySelector('#main-functions');
const textContainer = document.querySelector('#text-container');
const enterButton = document.querySelector('#enter');
const cleanButton = document.querySelector('#C');

//The digits and main functions
let digits = ['C', '()', '%', '1', '2', '3', '4', '5', '6', '7', '8', '9', '±', '0', '.'];
let mainFunctions = ['/', '*', '-', '+'];
//The factor that determinates if or not to "breakline"
let i = 0;
//The "breakline"
let float = '';

//  When the Enter Button is pressed, the math that is in the input is evaluated and 
//the input value turns into the result
const handleEnter = () => {
    textContainer.value = eval(textContainer.value);
}

//Cleans the input value
const handleClean = () => {
    textContainer.value = '';
}

//Making NumPad
digits.forEach(element => {
    if ((i - 2) % 3 === 0) {
        float = '';
    } else float = 'left';
    let btn = document.createElement('Button');
    btn.className = 'btn btn-primary btn-block';
    btn.onclick = () => {
        textContainer.value += element
    };
    btn.id = element;
    btn.style.cssFloat = float;
    btn.style.width = '50px';
    btn.style.height = '50px';
    btn.innerHTML = element;
    calc.appendChild(btn);
    i++;
});

//Making Functions Pad
mainFunctions.forEach(element => {
    let btn = document.createElement('Button');
    btn.className = 'btn btn-primary btn-block';
    btn.id = element;
    btn.onclick = () => {
        textContainer.value += element;
    };
    btn.style.width = '50px';
    btn.style.height = '50px';
    btn.style.webkitTextFillColor = 'blue';
    btn.innerHTML = element;
    btn.onmouseover = () => {
        console.log(btn.style.webkitTextFillColor);
    }
    functions.appendChild(btn);
});
//Color of the buttons
document.querySelector('#C').style.webkitTextFillColor = 'red';
enterButton.style.webkitTextFillColor = 'blue';

//Event Listeners
document.querySelector('#C').onclick = () => {
    handleClean();
}

enterButton.addEventListener('click', handleEnter);