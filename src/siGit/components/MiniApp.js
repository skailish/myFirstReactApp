import React, { useState } from "react";


const MiniApp = () => {

  const [numero, setNumero] = useState(1);
  const [resultado, setResultado] = useState(0);

  const realizarOperacion = (operacion) => {
    const newResultado = resultado + (operacion === "-" ? -numero : +numero)
    setResultado(newResultado)
  }



  return (
    <div>
      <div style={{ display: "flex" }}>
        <button onClick={() => setNumero(1)}>1</button>
        <button onClick={() => setNumero(10)}>10</button>
        <button onClick={() => setNumero(100)}>100</button>
      </div>
      <p>
        RESULTADO = {resultado}
      </p>
      <div style={{ display: "flex" }}>
        <button onClick={() => realizarOperacion("+")}>Sumar</button>
        <button onClick={() => realizarOperacion("-")}>Restar</button>
      </div >
    </div>
  );
};

export default MiniApp;
