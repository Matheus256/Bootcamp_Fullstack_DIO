const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}


function mapComThis(array, thisArg){
    return array.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1,2,3];

console.log('this -> maça', mapComThis(nums, maca));

console.log('this -> laranja', mapComThis(nums,laranja))