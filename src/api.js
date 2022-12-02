const content = document.querySelector ("p")
const add = document.querySelector ("button")


function printSomething (){
fetch('https://uselessfacts.jsph.pl/random.json?language=en')
  .then((response) => response.json())
  .then((data) => content.textContent=(data.text));
}

 add.addEventListener("click", printSomething)


































//  const content = document.querySelector("#write")
//  const button = document.querySelector("button")
// function press(){
//   let data = fetch('https://uselessfacts.jsph.pl/random.json?language=en')
//   .then((response) => response.json())
//   .then((data) => content.innerHTML = (data.text));
// }

// button.addEventListener("click", press)

 
