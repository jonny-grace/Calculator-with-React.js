import React from 'react'
import { ACTIONS } from './Actions'
import OperationsButton from './OperationsButton'
import NumberButton from './NumberButton'
function NumberButtonList({dispatch}) {
  return (
    <>
    <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        EC
      </button>
      <button className="del-button" onClick={()=>dispatch({type:ACTIONS.DELETE_DIGIT})}>Del</button>

      <OperationsButton dispatch={dispatch} operator="/" />

      <NumberButton dispatch={dispatch} number="9" />
      <NumberButton dispatch={dispatch} number="8" />
      <NumberButton dispatch={dispatch} number="7" />

      <OperationsButton dispatch={dispatch} operator="*" />

      <NumberButton dispatch={dispatch} number="6" />
      <NumberButton dispatch={dispatch} number="5" />
      <NumberButton dispatch={dispatch} number="4" />

      <OperationsButton dispatch={dispatch} operator="-" />
      <NumberButton dispatch={dispatch} number="3" />
      <NumberButton dispatch={dispatch} number="2" />
      <NumberButton dispatch={dispatch} number="1" />

      <OperationsButton dispatch={dispatch} operator="+" />
      <NumberButton dispatch={dispatch} number="." />
      <NumberButton dispatch={dispatch} number="0" />
      <button className="span-two" onClick={()=>dispatch({type:ACTIONS.EVALUATE})}>=</button>
    </>
  )
}

export default NumberButtonList