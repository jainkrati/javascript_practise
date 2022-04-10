console.log("Hello from the html ext.js")
console.log('ad'-'bc')
console.log(5 + undefined)
console.log(5 + null)
console.log(0=='')
console.log(0==='')

document.querySelector('html').addEventListener('click', function() {
    alert('Ouch! Stop poking me!');
  });

  const btn = document.querySelector('button');

  function random(number) {
    return Math.floor(Math.random() * (number+1));
  }
  
  btn.addEventListener('click', () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  });
