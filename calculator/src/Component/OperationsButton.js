import React, { useContext } from 'react'

import { ACTIONS } from './Actions'
import { CalculatorContext } from './CalculatorControler'

function OperationsButton({operator}) {
  const calculatorContext = useContext(CalculatorContext)

  return <button onClick={()=>calculatorContext.dispatch({type:ACTIONS.CONTROL_OPERATIONS,payload:{operator}})}>{operator}</button>
}

export default OperationsButton