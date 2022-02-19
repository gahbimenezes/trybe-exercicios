const btnEnviar = document.querySelector('#btn-enviar');
const autorizacao = document.querySelector('#autoriza-imagem')


btnEnviar.addEventListener('click', function (e) {

    if (!autorizacao.checked) {
        e.preventDefault();
        alert('Necessário autorizar o uso de imagem para enviar o formulário.');    
    }  

})

// exercício bonus 2

// const inputNome = document.querySelector('#nome').value.length;
// const inputEmail = document.querySelector('#email').value.length;
// const inputText = document.querySelector('#text-area').value.length;
// console.log(inputNome);
// console.log(inputEmail);
// console.log(inputText);

// btnEnviar.addEventListener('click', function (e) {

//     if (inputNome < 10 || inputNome > 40 || inputEmail < 10 || inputEmail > 50 || inputText > 500) {
//         e.preventDefault()
//         alert('Dados invalidos')
//     }
// })


