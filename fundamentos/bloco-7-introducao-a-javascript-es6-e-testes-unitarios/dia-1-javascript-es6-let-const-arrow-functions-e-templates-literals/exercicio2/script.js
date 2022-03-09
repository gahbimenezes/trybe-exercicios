// item 1 

// const fatorial = n => {
//     let result = n;
//     for (let index = 1; index < n; index += 1) {
//         console.log(result *= index);
//     }
//     return result

// }

// fatorial(5);

// mesma função com ternary

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;

console.log(factorial(5));

// item 2

// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

// referencia: https://pt.stackoverflow.com/questions/426836/como-pegar-a-maior-palavra-de-uma-string-em-javascript

function longestWord(string) {
    let phrase = string.split(' ');
    let maiorPalavra = 0;
    let palavra = null;

    phrase.forEach(function(word) {
        if (maiorPalavra < word.length) {
            maiorPalavra = word.length;            
            console.log(word);
            palavra = word;
            
        }
        
    })
    
    return palavra
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// item 3

const btnClique = document.querySelector('#btn-clique');
const count = document.querySelector('#countNumber');

let clickCount = 0;

btnClique.addEventListener('click', function () {
    clickCount += 1
    count.value = clickCount;
});

// item 4

const rephrase = (string) => {
    let a = string.match(' x ') ? string.replace(' x ', ' gabi ') : 'nao tem x'
    // essa opção (match) não é perfeita pq vai retornar sempre q encontrar um 'x', mesmo que no meio da palavra
    // para driblar isso inseri espaço antes e depois do x
    //gabriela x Pokemon
    //var[0] var[1]



    console.log(a);
}

rephrase('Tryber x aqui!')