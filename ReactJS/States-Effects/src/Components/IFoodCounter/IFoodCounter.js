import {useState, useEffect} from 'react';
import '../IFoodCounter/IFoodCounter.css';

export default function IFoodCounter(){

    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonStyle] = useState('counter-button-minus-active')

    //useEffect só é assinonado quando o valor monitorado é alterado
    useEffect(()=>{
        document.getElementById("moeda").innerHTML = 2.00 * value;
    },[value])

    function down(){

        if(value <= 1)
            setButtonStyle('counter-button-minus-desactive');

        if(value > 0)
            setValue(value-1);
    }

    function up(){
        setValue(value+1);
        setButtonStyle('counter-button-minus-active');
    }

    return (
        <div className="countex-wrapper">
            <button 
                className={buttonStyle}
                onClick={down}
            >
                -
            </button>
            <p>
                {value}
            </p>
            <button 
                className='counter-button-plus-active'
                onClick={up}
            >
                +
            </button>
            <button id='moeda'>12,00</button>
        </div>
    )
}