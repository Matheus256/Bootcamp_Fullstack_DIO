/**
 * 
 * @param {object} array Array de números inteiros
 * @returns Array com os valores únicos
 */
function valoresUnicos(array){
    const set = new Set(array);

    return [...set];
}

const array = [1,1,1,2,3,4,2,2,12,7,7,7,14];

console.log(typeof array);

console.log(valoresUnicos(array));