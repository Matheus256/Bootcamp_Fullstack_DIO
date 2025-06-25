function callback(item){
    return item % 2 === 0;
}

function filterPares(array){
    return array.filter(callback);
}

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

console.log(filterPares(array));