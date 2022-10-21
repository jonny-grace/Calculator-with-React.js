import React, { useContext } from 'react'
import NumberButtonList from "./NumberButtonList";
import { CalculatorContext } from './CalculatorControler';

function Layout() {
  const calculatorContext = useContext(CalculatorContext)
  return (
    
        <div className="container-grid">
      <div className="input-Container">
        <div className="previous-input-container">
          {calculatorContext.previusNumber}
          {calculatorContext.options}
        </div>
        <div className="current-input-container">{calculatorContext.currentNumber}</div>
      </div>
      <NumberButtonList/>
      
    </div>
  )
}

export default Layout