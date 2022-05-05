import './App.css';
import Buttons from './components/Buttons';
import Screen from "./components/Screen";
import BotonClear from './components/ButtonClear';
import {useState } from 'react';
import {evaluate} from "mathjs";
function App() {

  const [input , setInput] = useState("");

  const addInput = valor =>{
    setInput(input + valor);
  };

  const calculateResult = ()=>{

    if(input){
      setInput(evaluate(input));
    } else {
      alert("please send numbers in the calculator to calculate the operation");
    }

    

  }

  return (
    <div className="App">




      <div className="content-calculator" >
        <Screen 
          input={input}
        />
        <div className="fila">
        <Buttons manageClick={addInput}>1</Buttons>
        <Buttons manageClick={addInput}>2</Buttons>
        <Buttons manageClick={addInput}>3</Buttons>
            <Buttons manageClick={addInput}>+</Buttons>
        </div>
        <div className="fila">
        <Buttons manageClick={addInput}>4</Buttons>
        <Buttons manageClick={addInput}>5</Buttons>
        <Buttons manageClick={addInput}>6</Buttons>
            <Buttons manageClick={addInput}>-</Buttons>
          
          </ div>

        <div className="fila">
        <Buttons manageClick={addInput}>7</Buttons>
        <Buttons manageClick={addInput}>8</Buttons>
        <Buttons manageClick={addInput}>9</Buttons>
            <Buttons manageClick={addInput}>*</Buttons>
          </div>      

        <div className="fila">
        <Buttons manageClick={calculateResult}> = </Buttons>
        <Buttons manageClick={addInput}>0</Buttons>
        <Buttons manageClick={addInput}>.</Buttons>
            <Buttons manageClick={addInput}>/</Buttons>

       </div>      


        <div className="fila">

          <BotonClear Clear={()=>{setInput('')}}>
            Clear
          </BotonClear>
          
        </div>

      </div>
        
    </div>
    
    

  );
}

export default App;
