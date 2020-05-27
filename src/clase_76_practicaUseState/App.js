import React from 'react';
import SearchList from "./components/SearchList.js";
import CurrencyConverter from "./components/CurrencyConverter.js"
import FormularioEnvio from './components/FormularioEnvio.js';
import EditableText from './components/EditableText.js';
import EditableList from './components/EditableList.js';
import ScoreBoard from './components/ScoreBoard.js';


function App() {
  return (
    <div>
      <div style={{ border: "2px solid gray", margin: 10, padding: 20 }}>
        <h2>SEARCH LIST</h2>
        <SearchList items={["caramelos", "cuadernos", "biromes", "cucharas", "platos", "perros", "niñas", "ventanas", "colores"]} />
      </div>
      <div style={{ border: "2px solid gray", margin: 10, padding: 20 }}>
        <h2>CURRENCY CONVERTER</h2>
        <CurrencyConverter />
      </div>
      <div style={{ border: "2px solid gray", margin: 10, padding: 20 }}>
        <h2>FORMULARIO ENVIO</h2>
        <FormularioEnvio />
      </div>
      <div style={{ border: "2px solid gray", margin: 10, padding: 20 }}>
        <h2>EDITABLE TEXT</h2>
        <EditableText defaultValue={"Mi valor por defecto"} />
      </div>
      <div style={{ border: "2px solid gray", margin: 10, padding: 20 }}>
        <h2>EDITABLE LIST</h2>
        <EditableList />
      </div>
      <div style={{ border: "2px solid gray", margin: 10, padding: 20 }}>
        <h2>FORMULARIO ENVIO</h2>
        <FormularioEnvio />
      </div>
      <div style={{ border: "2px solid gray", margin: 10, padding: 20 }}>
        <h2>SCORE BOARD</h2>
        <ScoreBoard />
      </div>
    </div>
  );
}

export default App;
