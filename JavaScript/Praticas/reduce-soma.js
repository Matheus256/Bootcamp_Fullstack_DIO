function somaArray(array){
    return array.reduce(function(prev, current){
        return prev + current;
    }, 0)
}

const array = [1,2,3,4,5,6,7];

console.log(somaArray(array));