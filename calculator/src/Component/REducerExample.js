import React from 'react'

import { useReducer } from 'react';


let initialState = {
    firstNumber: 0
}
const reducer = (state,action)=>{
  switch(action.type){
    case 'increment':
      return {firstNumber:state.firstNumber +1 } 
    case 'decrement':
      return {firstNumber:state.firstNumber -1 } 
    case 'reset':
      return initialState
  }
}

function REducerExample() {
    const [count,dispatch] = useReducer(reducer,initialState)

  return (
    <div>Count - {count.firstNumber}
    <button onClick={()=>dispatch({type:'increment'})}>Increse</button>
    <button onClick={()=>dispatch({type:'decrement'})}>decrease</button>
    <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>

  )
}

export default REducerExample