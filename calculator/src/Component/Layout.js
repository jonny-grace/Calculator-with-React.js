import React from 'react'
import NumberButtonList from "./NumberButtonList";


function Layout({ currentNumber, previusNumber, options,dispatch }) {
  return (
    
        <div className="container-grid">
      <div className="input-Container">
        <div className="previous-input-container">
          {previusNumber}
          {options}
        </div>
        <div className="current-input-container">{currentNumber}</div>
      </div>
      <NumberButtonList dispatch={dispatch}/>
      
    </div>
  )
}

export default Layout