import React from 'react'
import { ACTIONS } from './Actions'

function OperationsButton({dispatch,operator}) {
  return <button onClick={()=>dispatch({type:ACTIONS.CONTROL_OPERATIONS,payload:{operator}})}>{operator}</button>
}

export default OperationsButton