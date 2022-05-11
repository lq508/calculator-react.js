import './App.css';
import Buttons from './components/Buttons';
import Screen from "./components/Screen";
import BotonClear from './components/ButtonClear';
import {useState } from 'react';
import {evaluate} from "mathjs";
function App() {

  const [input , setInput] = useState("");

  const addInput = valor =>{
    let confirmation = false;

    let final_caracter = input.charAt(input.length - 1);

    console.log(input.length);

    if(input.length > 0){
      if(final_caracter == "+" || final_caracter == "-" || final_caracter == "*" || final_caracter == "/"){

        if(valor == "+" || valor == "-" || valor == "*" || valor == "/"){

            confirmation=true;

        }


      }

    }


    if(confirmation){

      alert(" you not set 2 operators in the calculator");

    } else {
      setInput(input + valor);

    }



  };

  const calculateResult = ()=>{
    let final_caracter = input.charAt(input.length-1);




    if(input){
      if(!isNaN(final_caracter)){
        setInput(evaluate(input));

      } else {
        alert(" the operations not finish with operators, this expretions should finish with numbers  ");
      }

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
