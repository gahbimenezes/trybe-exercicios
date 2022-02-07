const nota = 98;

if (nota >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
}
else if (nota >= 60 && nota < 60) {
    console.log("Você está na nossa lista de espera");
}
else if ( nota < 60) {
    console.log("Você foi reprovada(o)");
}
else {
    console.log("nota fora do parâmetro de classificação");
}