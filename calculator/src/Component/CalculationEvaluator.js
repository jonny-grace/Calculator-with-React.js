import React from 'react'


function CalculationEvaluator({state}) {
    const { currentNumber, previusNumber, options } = state
    const prev = parseFloat(previusNumber);
    const current = parseFloat(currentNumber);
  
    let result = "";
    if (isNaN(prev) && isNaN(current)) return "";
    switch (options) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = current / prev;
        break;
    }
    return result.toString();
  }

export default CalculationEvaluator
