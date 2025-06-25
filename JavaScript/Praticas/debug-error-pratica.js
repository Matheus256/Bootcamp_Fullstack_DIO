function validaArray(arr,num){
    try {

        //Faltam os parâmetros
        if(!arr && !num){
            throw new ReferenceError("Envie os parâmetros");
        }

        //Se o tipo do arra é object
        if(typeof arr !== 'object'){
            throw new TypeError("Array precisar ser do tipo object");
        }

        //Se o tipo do num é number
        if(typeof num !== 'number'){
            throw new TypeError("Num precisar ser do tipo number");
        }

        //Valida o tamanho de arr
        if(arr.length !== num) throw new RangeError("Tamanho imcompatível!");

        return arr;

    } catch (error) {
        if(error instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!");
            console.log(error.message);

        } else if(error instanceof TypeError){
            console.log("Este erro é um TypeError!");
            console.log(error.message);

        } else if(error instanceof RangeError){
            console.log("Este erro é um RangeError!");
            console.log(error.message);

        } else {
            console.log("Tipo de erro não esperado:" + e);
        }

    }
}

console.log(validaArray([2,2], 2));