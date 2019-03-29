const calc = document.querySelector('#calculator');
const functions = document.querySelector('#main-functions');
const textContainer = document.querySelector('#text-container');
const enterButton = document.querySelector('#enter');
const cleanButton = document.querySelector('#C');

let digits = ['C', '()', '%', '1', '2', '3', '4', '5', '6', '7', '8', '9', '±', '0', '.'];
let mainFunctions = ['/', '*', '-', '+'];
let i = 0;
let float = '';
let operation;

const handleEnter = () => {
    textContainer.value = eval(textContainer.value);
}

const handleClean = () => {
    textContainer.value = '';
}

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

mainFunctions.forEach(element => {
    let btn = document.createElement('Button');
    btn.className = 'btn btn-primary btn-block';
    btn.id = element;
    btn.onclick = () => {
        textContainer.value += element;
        operation = element;
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

document.querySelector('#C').style.webkitTextFillColor = 'red';
document.querySelector('#C').onclick = () => {
    handleClean();
}

enterButton.addEventListener('click', handleEnter);
enterButton.style.webkitTextFillColor = 'blue';