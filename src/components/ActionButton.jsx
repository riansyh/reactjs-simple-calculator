import React, {useContext} from 'react'
import { CalculatorContext } from '../App'

function ActionButton(props) {
    const calculatorContext = useContext(CalculatorContext);
    let type = "button";
    switch (props.type) {
        case "reset":
            type = type + " text-button reset-button";
            break;
        case "delete":
            type = type + " delete-button";
            break;
        case "equal":
            type = type + " text-button equal-button";
            break;            
        default:
            break;
    }
    return (
        <button className={type} onClick={() => calculatorContext.calculatorDispatch({type: props.operator, operation: props.operation})}>
            {props.children}
        </button>
    )
}

export default ActionButton
