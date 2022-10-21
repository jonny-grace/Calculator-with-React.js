import React, { useContext } from 'react'
import { ACTIONS } from './Actions'
import OperationsButton from './OperationsButton'
import NumberButton from './NumberButton'
import { CalculatorContext } from './CalculatorControler';

function NumberButtonList() {
  const calculatorContext = useContext(CalculatorContext)
  return (
    <>
    <button
        className="span-two"
        onClick={() => calculatorContext.dispatch({ type: ACTIONS.CLEAR })}
      >
        EC
      </button>
      <button className="del-button" onClick={()=>calculatorContext.dispatch({type:ACTIONS.DELETE_DIGIT})}>Del</button>

      <OperationsButton  operator="/" />

      <NumberButton  number="9" />
      <NumberButton  number="8" />
      <NumberButton  number="7" />

      <OperationsButton  operator="*" />

      <NumberButton  number="6" />
      <NumberButton  number="5" />
      <NumberButton  number="4" />

      <OperationsButton  operator="-" />
      <NumberButton  number="3" />
      <NumberButton  number="2" />
      <NumberButton  number="1" />

      <OperationsButton  operator="+" />
      <NumberButton  number="." />
      <NumberButton  number="0" />
      <button className="span-two" onClick={()=>calculatorContext.dispatch({type:ACTIONS.EVALUATE})}>=</button>
    </>
  )
}

export default NumberButtonList