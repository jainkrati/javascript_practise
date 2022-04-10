console.log("Hello from main.js")

// variables in JS
let a = 90
console.log(a)

let animal = { name : 'elephant', color : 'grey', age : '2'};
console.log(`The animal name is ${animal.name}`)


function random(number) {
    return Math.floor(Math.random()*number);
  }

console.log(random(a))


const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

document.querySelector('html').addEventListener('click', function() {
    alert('Ouch! Stop poking me!');
  });


console.log(5 + undefined)  
console.log(5 + null)
console.log('ad'-'bc') 
console.log(0=='')  // compare the inherent value
console.log(0==='') // compares the inherent objects/references

