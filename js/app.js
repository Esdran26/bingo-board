let body = document.querySelector('.container');

function next_id(input) {
    let output = parseInt(input, 10)+1; // parse and increment
    output += ""; // convert to string
    while (output.length<2) output = "0"+output; // prepend leading zeros
    return output;
}
  
let id = "00";

for (let i=0; i<90; i++) {
    let h1 = document.createElement('h1');

    id = next_id(id);
    h1.textContent = id;
    h1.id = id;
    body.appendChild(h1);
}

const form = document.getElementById('form'),
      inputNumber = document.getElementById('inputNumber'),
      inputSubmit = document.getElementById('inputSubmit');

      form.addEventListener('submit', validatingNumber);

function validatingNumber(e) {
    e.preventDefault();
    
    let inputNumberValue = inputNumber.value,
        paintH1Number = document.getElementById(inputNumberValue);
    paintH1Number.style.color = 'black';
    paintH1Number.style.backgroundColor = '#f39c12';

    form.reset();
}