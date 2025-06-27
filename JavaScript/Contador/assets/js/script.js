var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        currentNumberWrapper.style.color = "red";
    }
}

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 0){
        currentNumberWrapper.style.color = "black";
    }
}