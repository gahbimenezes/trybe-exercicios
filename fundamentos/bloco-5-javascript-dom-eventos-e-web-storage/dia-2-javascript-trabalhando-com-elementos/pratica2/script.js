//item 1

let brother = document.createElement("section");
brother.innerText = "Elemento irmão de elementoOndeVoceEsta"

document.getElementById("pai").appendChild(brother);

//item 2

let son = document.createElement("section");
son.innerText = "Terceio filho do filho";

document.getElementById("elementoOndeVoceEsta").appendChild(son);

//item 3

let grandson = document.createElement("section");
grandson.innerText = "filho do primeiroFilhoDoFilho"

document.getElementById("primeiroFilhoDoFilho").appendChild(grandson);

//item 4

console.log(document.getElementsByTagName("section")[4].parentElement.parentElement.nextElementSibling);