import React, { useReducer } from "react";
import "../style.css";
import NumberButtonList from "./NumberButtonList";
import { ACTIONS } from "./Actions";
import AddNumber from "./AddNumber";
import Layout from "./Layout";
import CalculationEvaluator from "./CalculationEvaluator";

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
      if (state.currentNumber == "0" && payload.number == "0") return state;
      if (payload.number == "." && state.currentNumber.includes("."))
        return state;
      return {
        ...state,
        currentNumber: `${state.currentNumber || ""}${payload.number}`,
      };

    case ACTIONS.CONTROL_OPERATIONS:
      if (state.currentNumber == null)
        return { ...state, options: payload.operator };
      
      if (state.currentNumber == null && state.currentNumber == null) {
        return state
      }

      if (state.currentNumber!=null && state.previusNumber == null) {
        return {
          ...state,
          previusNumber: state.currentNumber,
          options: payload.operator,
          currentNumber: null,
        };
      }

      return {
        ...state,
        
        previusNumber: <CalculationEvaluator state={state} />,
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

        currentNumber: <CalculationEvaluator state={state} />,
        // currentNumber: evaluate(state),
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
  }
}
function CalculatorControler() {
  const [{ currentNumber, previusNumber, options }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <Layout
      currentNumber={currentNumber}
      previusNumber={previusNumber}
      options={options}
      dispatch={dispatch}
    />
  );
}

export default CalculatorControler;
