import React, { useState } from "react";


const Calculator = () => {

  const [suma, setSuma] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [lista, setLista] = useState([]);
  const updateGastos = (producto, cantidad) => {
    setSuma(suma + cantidad)
    setGastos([(cantidad), ...gastos])
    setLista([`${producto} $${cantidad}`, ...lista])
  }



  return (
    <div>

      <div style={{ display: "flex" }}>
        <button onClick={() => updateGastos("caramelos", 10)}>Caramelos= $10</button>
        <button onClick={() => updateGastos("birome", 50)}>Birome= $50</button>
        <button onClick={() => updateGastos("calculadora", 200)}>Calculadora= $200</button>
      </div >
      <ul>
        {lista.map((item, index) => (<li key={index}>{item}</li>))}
        <li>
          Total = ${suma}
        </li>
      </ul>
    </div>
  );
};

export default Calculator;
