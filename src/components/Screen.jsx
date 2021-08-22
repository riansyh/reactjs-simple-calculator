import React, {Fragment, useContext} from 'react'
import { CalculatorContext } from '../App'

function Screen() {
    const calculatorContext = useContext(CalculatorContext);

    return (
        <Fragment>
            <p class="operator" id="displayOperator"> {calculatorContext.state.operator === '*' ? 'x' : calculatorContext.state.operator} </p>
            <p id="displayNumber">{calculatorContext.state.displayNumber}</p>
        </Fragment>
    )
}

export default Screen
