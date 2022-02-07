//item 1

// const a = 20;
// const b = 5;

// const soma = a + b;
// const subtracao = a - b;
// const divisao = a / b;
// const multiplicacao = a * b;
// const modulo = a % b;

// console.log(soma);
// console.log(subtracao);
// console.log(divisao);
// console.log(multiplicacao);
// console.log(modulo);




// item 2

// const a = 20;
// const b = 5;

// if (a > b) {
//     console.log (a);    
// }
// else {
//     console.log(b);
// }






//item 3

// const a = 20;
// const b = 5;
// const c = 25;

// if ( a > b && a > c) {
//     console.log(a);
// }
// else if (b > a && b > c) {
//     console.log(b);
// }
// else {
//     console.log(c);
// }





// item 4

// const number = 5;

// if (number == 0) {
//     console.log("zero")
// }
// else if (number < 0) {
//     console.log("negative");    
// }
// else {
//     console.log("positive");
// }







//item 5

// const a = 90
// const b = 45
// const c = -45

// if (a < 0 || b < 0 || c < 0) {
//     console.log("valor inválido")
// }
// else if (a + b + c == 180) {
//     console.log(true);    
// }
// else {
//     console.log(false)    
// }





// item 6

// let peca = "Rainha";
// let input = peca.toLowerCase ();



// switch (input) {
//     case "peão":
//         console.log("Peão - Só se movimenta para frente. No primeiro lance pode se movimentar 1 ou 2 casas. A partir do segundo lance movimenta-se apenas uma casa por vez.")        
//         break;

//     case "torre":
//         console.log("Torre - Se movimenta para frente e para trás, para a direita e para a esquerda, quantas casas quiser, mas não pode pular nenhuma outra peça")        
//         break;

//     case "bispo":
//         console.log("Bispo - Se movimenta na diagonal mantendo-se sempre nas casas de mesma cor que se encontrava no início do jogo, podendo ir para frente e para trás, quantas casas quiser, mas não pode pular nenhuma outra peça.")        
//         break;

//     case "cavalo":
//         console.log("Cavalo - Tem um movimento especial que parece a letra L. O cavalo se movimenta 2 casas para frente ou para trás e em seguida 1 casa para a direita ou para a esquerda, ou 2 casas para a direita ou para a esquerda e em seguida 1 casa para frente ou para trás. O cavalo é a única peça do xadrez que pode pular outras peças.")        
//         break;

//     case "rainha":
//         console.log("Rainha - É a peça mais poderosa do xadrez, ela pode ir para frente ou para trás, para direita ou para a esquerda, ou na diagonal, quantas casas quiser, mas não pode pular nenhuma outra peça.")        
//         break;

//     case "rei":
//     console.log("Rei - Movimenta-se apenas 1 casa em qualquer direção. O Rei nunca pode se movimentar para uma casa que esteja sob ataque ou capturar uma peça que esteja defendida por uma peça adversária.")        
//     break;
        
//     default:
//         console.log("Essa peça não faz parte do jogo de xadrez");
//         break;
// }






// item 7

// let porcentagem = 98;

// if (porcentagem < 0 || porcentagem > 100) {
//     console.log("Percentual não computado, favor veificar.")
// }
// else if (porcentagem >= 90) {
//     console.log("A"); 
// }
// else if (porcentagem >= 80) {
//     console.log("B");
// }
// else if (porcentagem >= 70) {
//     console.log("C");
// }
// else if (porcentagem >= 60) {
//     console.log("D");
// }
// else if (porcentagem >= 50) {
//     console.log("E");
// }
// else {
//     console.log("F");
// }





// item 8

// const a = 4;
// const b = 5;
// const c = 7;

// if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }






// item 9

// const a = 3;
// const b = 6;
// const c = 8;

// if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }






//item 10

// const  custoDoProduto = 100;
// const impostoSobreCusto = 0.20 + 1;
// const custoTotal = custoDoProduto * impostoSobreCusto;
// // console.log(custoTotal);

// const valorDeVenda = 1000;
// const lucro = valorDeVenda - custoTotal;
// // console.log(lucro);

// let produtosVendidos = 1000;
// const lucroTotal = lucro * produtosVendidos;

// if (custoDoProduto <= 0 || valorDeVenda <= 0) {
//     console.log("Erro de valores, favor verificar inputs");
// }
// else {
//     console.log("Lucro total de vendas " + lucroTotal)
// }






// item 11

//Esse só consegui resolver assistindo o vídeo gabarito, mas meu raciocínio tinha ido por um caminho parecido.

let aliquotInss;
let aliquotIr;

let salarioBruto = 1500.10;

if (salarioBruto <= 1556.94) {
    aliquotInss = salarioBruto * 0.08;
}
else if (salarioBruto <= 2594.92) {
    aliquotInss = salarioBruto * 0.09;
}
else if (salarioBruto <= 5189.82) {
    aliquotInss = salarioBruto * 0.11;
}
else {
    aliquotInss = 570.88;
}

// console.log(aliquotInss);

let salarioBase = salarioBruto - aliquotInss;
// console.log(salarioBase)

if (salarioBase <= 1903.98) {
    aliquotIr = 0;
}
else if (salarioBase <= 2826.65) {
    aliquotIr = (salarioBase * 0.075) - 142.80;
}
else if (salarioBase <= 3751.05) {
    aliquotIr = (salarioBase * 0.15) - 354.80;
}
else if (salarioBase <= 4664.68) {
    aliquotIr = (salarioBase * 0.225) - 636.13;
}
else {
    aliquotIr = (salarioBase * 0.275) - 869.36;
}

// console.log(aliquotIr);
console.log("Salário Líquido = " + (salarioBase - aliquotIr));