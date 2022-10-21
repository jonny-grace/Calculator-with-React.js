
import './App.css';
import CalculatorControler from './Component/CalculatorControler';

function App() {
  

 
  return (
    <div className="App">
      <header className="App-header">
        <div className='developer'>
        Simple Calculator App Wtih React 
        <a href='www.google.com'>Developed by Yohannes Lemma</a>
        </div>
      </header>
     
      <div>
        <CalculatorControler />
        {/* <CalculaterMain /> */}
        {/* <REducerExample /> */}
       </div>
    </div>
  );
}

export default App;
