//Propriedades para acessar elementos a partir de outro:

// parentNode : retorna o nó pai.
// parentElement : retorna o elemento pai.
// childNodes : retorna um NodeList com todos os nós filhos.
// children : retorna um HTMLCollection com todos os elementos filhos.
// firstChild : retorna o primeiro nó filho.
// firstElementChild : retorna o primeiro elemento filho.
// lastChild : retorna o último nó filho.
// lastElementChild : retorna o último elemento filho.
// nextSibling : retorna o próximo nó.
// nextElementSibling : retorna o próximo elemento.
// previousSibling : retorna o nó anterior.
// previousElementSibling : retorna o elemento anterior.

// arquivo script.js

//item 1

// console.log(document.getElementById("elementoOndeVoceEsta"));

//item 2

// let dad = document.getElementById("elementoOndeVoceEsta").parentElement;
// dad.style.backgroundColor = "salmon";

//item 3

// let primeiroFilho = document.getElementById("elementoOndeVoceEsta").firstElementChild.innerHTML = "Primeiro filho do filho = adição de texto";


//item 4

console.log(document.getElementById("pai").firstElementChild);


//item 5

// console.log(document.getElementById("elementoOndeVoceEsta").previousElementSibling);


//item 6 

// console.log(document.getElementById("elementoOndeVoceEsta").parentElement.innerText)

//item 7

// console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling)

//item 8

// console.log(document.getElementById("pai").children[2]);