import {useState} from 'react';

function SmartCounter(){
    //A variável qauntity esta enganchada com a função upQuantity
    const [quantity, upQuantity] = useState(1);

    //retorna um vetor
    //1. variavel stateful
    //2, função amarrada a essa variável que atualiza esse valor

    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={()=> upQuantity(quantity + 1)}>Aumentar</button>
        </>
    )
}

export default SmartCounter;