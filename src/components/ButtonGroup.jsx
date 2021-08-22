import React, { Fragment } from 'react'
import ActionButton from './ActionButton'
import NumberButton from './NumberButton'

function ButtonGroup() {
    return (
        <Fragment>
            <NumberButton>1</NumberButton>
            <NumberButton>2</NumberButton>
            <NumberButton>3</NumberButton>
            <ActionButton operator="DELETE">DEL</ActionButton>
            <NumberButton>4</NumberButton>
            <NumberButton>5</NumberButton>
            <NumberButton>6</NumberButton>
            <ActionButton operator="OPERATOR" operation="+">+</ActionButton>
            <NumberButton>7</NumberButton>
            <NumberButton>8</NumberButton>
            <NumberButton>9</NumberButton>
            <ActionButton operator="OPERATOR" operation="-">-</ActionButton>
            <NumberButton>.</NumberButton>
            <NumberButton>0</NumberButton>
            <ActionButton operator="OPERATOR" operation="/">/</ActionButton>
            <ActionButton operator="OPERATOR" operation="*">x</ActionButton>
            <ActionButton type="reset" operator="CLEAR">C</ActionButton>
            <ActionButton type="equal" operator="CALCULATION">=</ActionButton>
        </Fragment>
    )
}

export default ButtonGroup
