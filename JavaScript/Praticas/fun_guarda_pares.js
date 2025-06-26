function ValoresPares(array){
    let pares = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            pares.push(array[i]);
        }
    }

    return pares;
}

let array = [1,2,3,4,5,6,7,8,9,10,11,12];
let valores_pares = ValoresPares(array);

for(let i = 0; i < valores_pares.length; i++){
    console.log(valores_pares[i]+ " ")
}

console.log("");

console.log(valores_pares);