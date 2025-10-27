/* Programa - Modelo 1 */
window.document.addEventListener("DOMContentLoaded", function(){
    /*Botão Letra Maiúscula*/ 
    window.document.querySelector("#btnMaiuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value 
        document.querySelector("#result").innerHTML = inputText.toUpperCase()
    })

    /*Botão Letra Minúscula*/ 
    window.document.querySelector("#btnMinuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value 
        document.querySelector("#result").innerHTML = inputText.toLowerCase()
    })

    /*Botão 1º Letra MAIÚSCULA*/
    window.document.querySelector("#btnPrimeiraLetra").addEventListener("click", function() {
    let inputText = document.querySelector("#input-text").value;

    if (inputText.length > 0) {
        inputText = inputText.toLowerCase();

        let resultado = inputText.replace(/(?:^|\.\s*)([a-z])/g, function(match, p1) {
            return match.replace(p1, p1.toUpperCase());
        });

        document.querySelector("#result").innerHTML = resultado;
    } 
});

    /*Botão Limpar*/
    window.document.querySelector("#btnLimpar").addEventListener("click", function() {
    document.querySelector("#input-text").value = "";  
    document.querySelector("#result").innerHTML = "";  
    });

    /*Botão Contar Caracteres*/
    window.document.querySelector("#btnContar").addEventListener("click", function() {
    let inputText = document.querySelector("#input-text").value;
    let count = inputText.length;
    document.querySelector("#result").innerHTML = `Caracteres: ${count}`;
    });
})
