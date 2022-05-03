import './App.css';
import Buttons from './components/Buttons';
import Screen from "./components/Screen";
import BotonClear from './components/ButtonClear';
import {useState } from 'react';
function App() {

  const [input , setInput] = useState("");

  const agregarInput = valor =>{
    setInput(input + valor);
  };

  return (
    <div className="App">




      <div className="content-calculator" >
        <Screen 
          input={input}
        />
        <div className="fila">
        <Buttons> 1 </Buttons>
        <Buttons> 2 </Buttons>
        <Buttons> 3 </Buttons>
            <Buttons> + </Buttons>
        </div>
        <div className="fila">
        <Buttons> 4 </Buttons>
        <Buttons> 5 </Buttons>
        <Buttons> 6 </Buttons>
            <Buttons> - </Buttons>
          
          </ div>

        <div className="fila">
        <Buttons> 7 </Buttons>
        <Buttons> 8 </Buttons>
        <Buttons> 9 </Buttons>
            <Buttons> * </Buttons>
          </div>      

        <div className="fila">
        <Buttons> = </Buttons>
        <Buttons> 0 </Buttons>
        <Buttons> . </Buttons>
            <Buttons> / </Buttons>

       </div>      


        <div className="fila">

          <BotonClear>
            Clear
          </BotonClear>
          
        </div>

      </div>
        
    </div>
    
    

  );
}

export default App;
