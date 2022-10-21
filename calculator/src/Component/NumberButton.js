import React, { useContext } from 'react'

import { ACTIONS } from './Actions'
import { CalculatorContext } from './CalculatorControler'
function NumberButton({number}) {

  const calculatorContext = useContext(CalculatorContext)
  
  return <button onClick={()=>calculatorContext.dispatch(
    {type:ACTIONS.ADD_NUMBER,payload:{number}}
    )}>{number}</button>
}

export default NumberButton