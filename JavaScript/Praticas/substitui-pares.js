/**
 * Função que substitui os valores pares por zero.
 *
 * @param {object} array Um array de números inteiros.
 * @returns {object} O array fornecido como parâmetro com zeros nas posições que tinham números pares.
 */
function substituirPares(array){
    if(!array) return -1;
    if(array.length <= 0) return -1;

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            array[i] = 0;
        }
    }

    return array;
}

let arr = [1, 12, 8, 7, 5, 10, 14]

console.log(typeof arr);

console.log(substituirPares(arr));
