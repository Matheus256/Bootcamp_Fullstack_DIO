/**
 * Função que verifica se uma palavra é um palíndromo.
 *
 * @param {String} string Uma palavra no formato string.
 * @returns {boolean} Verdadeiro para é um palíndromo e Falso para o contrário.
 */
function verificaPalindromo(string){
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

/**
 * Função que verifica se uma palavra é um palíndromo.
 *
 * @param {String} string Uma palavra no formato string.
 * @returns {boolean} Verdadeiro para é um palíndromo e Falso para o contrário.
 */
function verificaPalindromo2(string){
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 -i]){
            return false;
        }
    }

    return true;
}

//Teste com as funções
console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo2("ovo"));
console.log(verificaPalindromo("gato"));
console.log(verificaPalindromo2("gato"));