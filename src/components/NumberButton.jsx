import React, {useContext} from 'react'
import { CalculatorContext } from '../App'

function NumberButton({children}) {
    const calculatorContext = useContext(CalculatorContext);

    return (
        <button className="button" onClick={() => calculatorContext.calculatorDispatch({type:'APPEND_NUMBER', number: children})}>
            {children}
        </button>
    )
}

export default NumberButton
