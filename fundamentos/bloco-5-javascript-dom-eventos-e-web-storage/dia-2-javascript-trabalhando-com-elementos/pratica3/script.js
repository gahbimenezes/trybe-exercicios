//Atividade prática 2 
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

//fim da atividade pratica 2

// Atividade prática 3

// para a solução desse eu tive que verificar o gabarito.


let dad = document.getElementById("pai");

for (let index = dad.childNodes.length -1; index >= 0; index -= 1) {
    let toRemove = dad.childNodes[index];

    if (toRemove.id !== "elementoOndeVoceEsta") {
        toRemove.remove();
    }
    
}