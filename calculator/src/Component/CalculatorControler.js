import React, {  useReducer } from "react";
import "../style.css";
import { ACTIONS } from "./Actions";
import Layout from "./Layout";
import { evaluate } from "./CalculationEvaluator";
export const CalculatorContext = React.createContext()
function reducer(state, { type, payload }) {
  
  switch (type) {
    case ACTIONS.ADD_NUMBER:
     
      if (state.overFlow) {
        return {
          ...state,
          currentNumber: payload.number,
          overFlow: false,
        };
      }
      
      if(state.currentNumber==null && payload.number==".") return  state
      
      if (state.currentNumber === "0" && payload.number === "0") return state;
      if (payload.number === "." && state.currentNumber.includes("."))
        return state;
      return {
        ...state,
        currentNumber: `${state.currentNumber || ""}${payload.number}`,
      };

    case ACTIONS.CONTROL_OPERATIONS:
      if (state.currentNumber == null) {
        return { ...state, options: payload.operator };
      }
      if (state.currentNumber == null && state.previusNumber == null) {
        return state;
      }

      if (state.currentNumber != null && state.previusNumber == null) {
        return {
          ...state,
          previusNumber: state.currentNumber,
          options: payload.operator,
          currentNumber: null,
        };
      }

      return {
        ...state,
        previusNumber: evaluate(state),

        options: payload.operator,
        currentNumber: null,
      };

    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.EVALUATE:
      if (
        state.currentNumber == null ||
        state.previusNumber == null ||
        state.options == null
      ) {
        return state;
      }

      return {
        ...state,
        overFlow: true,
        previusNumber: null,
        options: null,

        // currentNumber: <CalculationEvaluator state={state} />,
        currentNumber: evaluate(state),
      };

    case ACTIONS.DELETE_DIGIT:
      if (state.overFlow) return { ...state, currentNumber: null };
      if (state.currentNumber == null) return state;

      if (state.currentNumber.length == 1)
        return { ...state, currentNumber: null };

      return {
        ...state,
        currentNumber: state.currentNumber.slice(0, -1),
      };
    default: return state
  }
}
function CalculatorControler() {

  const [{ currentNumber, previusNumber, options }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (<>
    <CalculatorContext.Provider 
    value={{
      currentNumber:currentNumber,
      previusNumber:previusNumber,
      options:options,
      dispatch:dispatch
    }}>
    <Layout/>
    </CalculatorContext.Provider>
    
    </>
  );
}

export default CalculatorControler;
