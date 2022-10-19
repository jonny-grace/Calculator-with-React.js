import React, { useReducer, useState } from "react";
import "../calculatorstyle.css";
import { DigitButton } from "./DigitButton";
import { OperationButton } from "./OperationButton";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose_operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if(state.overwrite){
        return{
          ...state,
          currentOperand: payload.digit,
          overwrite:false
        }
      }
      if (state.currentOperand === "0" && payload.digit === "0") return state;
      if (payload.digit === "." && state.currentOperand.includes("."))
        return state;

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.CHOOSE_OPERATION:
     if(state.currentOperand==null){
      return{...state,operation:payload.operation}
     }
      
      if (state.currentOperand == null && state.previusOperand == null)
        return state;
      if (state.currentOperand != null && state.previusOperand==null) {
        return {
          ...state,
          operation: payload.operation,
          previusOperand: state.currentOperand,
          currentOperand: null,
        };
      }


      return {
        ...state,
        previusOperand: evaluate(state),
        operation: payload.operation,
        currentOperand:null
      };

    case ACTIONS.EVALUATE:

    if(state.operation==null || state.currentOperand==null||state.previusOperand==null) return state

    return{
      ...state,
      overwrite:true,
      previusOperand: null,
      operation: null,
      currentOperand:evaluate(state)
    }
  case ACTIONS.DELETE_DIGIT:
    if(state.overwrite){
      return{
        ...state,
        currentOperand: null,
        overwrite:false
      }
    }
    if(state.currentOperand==null){
      return state
    }
if(state.currentOperand.length==1){
  return {...state,currentOperand:null}
}
    return{
      ...state,
      currentOperand:state.currentOperand.slice(0,-1)
    }
    }
  
};
const evaluate =({currentOperand,previusOperand,operation})=>{
  console.log(previusOperand, " ", currentOperand, " ", operation)
const current= parseFloat(currentOperand)
const prev= parseFloat(previusOperand)
let result = 0
if(isNaN(current) || isNaN(prev)) return ""

switch(operation){
  case '+':
   
    result = current + prev
    break;
  case '-':
    result = prev - current
    break;
  case '*':
    result = current * prev
    break;
  case '/':
    result= prev / current 
    break;
    
}
console.log(result)
return result.toString()
}
function CalculaterMain() {
  const [{ currentOperand, previusOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="container-grid">
      <div className="input-container">
        <div className="previous-input">
          {previusOperand}
          {operation}
        </div>
        <div className="current-input">{currentOperand}</div>
      </div>
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        AC
      </button>
      <button onClick={()=>dispatch({type:ACTIONS.DELETE_DIGIT})}>DEL</button>

      <OperationButton dispatch={dispatch} operation="/" />
      <DigitButton dispatch={dispatch} digit="9" />
      <DigitButton dispatch={dispatch} digit="8" />
      <DigitButton dispatch={dispatch} digit="7" />
      <OperationButton dispatch={dispatch} operation="*" />

      <DigitButton dispatch={dispatch} digit="6" />
      <DigitButton dispatch={dispatch} digit="5" />
      <DigitButton dispatch={dispatch} digit="4" />
      <OperationButton dispatch={dispatch} operation="+" />

      <DigitButton dispatch={dispatch} digit="3" />
      <DigitButton dispatch={dispatch} digit="2" />
      <DigitButton dispatch={dispatch} digit="1" />
      <OperationButton dispatch={dispatch} operation="-" />

      <DigitButton dispatch={dispatch} digit="." />
      <DigitButton dispatch={dispatch} digit="0" />
      <button className="span-two" onClick={()=>dispatch({type:ACTIONS.EVALUATE})}>=</button>
    </div>
  );
}

export default CalculaterMain;
