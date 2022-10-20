import React from 'react'
import { ACTIONS } from './Actions'
// import { ACTIONS } from './CalculatorControler'
function NumberButton({dispatch,number}) {
  return <button onClick={()=>dispatch({type:ACTIONS.ADD_NUMBER,payload:{number}})}>{number}</button>
}

export default NumberButton