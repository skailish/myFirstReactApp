import React, { useState } from 'react';

// Crear un component Form que
// renderice algunos inputs (3 o 4) y un button que diga "Enviar"
// al apretar enviar, debe chequear que los inputs no estén vacíos
// si alguno está vacío, debe mostrar un mensaje que diga "Por favor, complete todos los campos"
// si ninguno está vacío, debe mostrar un mensaje que diga "Gracias por completar el formulario, sus datos han sido guardados" y debe vaciar todos los campos

const Form = () => {
  const [valor, setValor] = useState({ valor1: "", valor2: "", valor3: "", valor4: "" })
  const [mensaje, setmensaje] = useState("Complete el formulario")

  const handleChange = (event) => {
    const valorTemp = event.target.value;
    setValor({
      ...valor,
      [event.target.name]: valorTemp
    });
  }

  const validarInputs = () => {
    if ((valor.valor1 === "" || valor.valor2 === "" || valor.valor3 === "" || valor.valor4 === "")) {
      setmensaje("Por favor, complete todos los campos")

    } else {
      setmensaje("Gracias por completar el formulario, sus datos han sido guardados")
      setValor({ valor1: "", valor2: "", valor3: "", valor4: "" })
    }
  }

  return (
    <>
      <input name="valor1" value={valor.valor1} onChange={handleChange} />
      <input name="valor2" value={valor.valor2} onChange={handleChange} />
      <input name="valor3" value={valor.valor3} onChange={handleChange} />
      <input name="valor4" value={valor.valor4} onChange={handleChange} />
      <button onClick={validarInputs}>Enviar</button>
      <p>{mensaje}</p>
    </>
  )

}


// CurrencyConverter
// Crear un componente CurrencyConverter que

// renderice dos inputs de número con sus labels, uno representando la moneda en pesos y otro la moneda en dólares
// cuando se escriba algo en cualquiera de los inputs, el otro debe actualizar automáticamente a medida que se va escribiendo. Por ejemplo, si ingreso 1 en el input de dolares, el de pesos se debe actualizar a 65, y si ingreso 130 en el de pesos, el de dolares se debe actualizar a 2
// EXTRA: agregar props para definir las monedas y el valor de cambio

const CurrencyConverter = () => {

  const [valor, setValor] = useState({ pesos: 0, dolares: 0 })

  const convert = (event) => {
    const valorNuevo = event.target.value;
    const keyValor = event.target.name === "pesos" ? "dolares" : "pesos";
    const conversion = keyValor === "pesos" ? (valorNuevo * 67) : (valorNuevo / 67)
    setValor({
      [keyValor]: conversion,
      [event.target.name]: valorNuevo
    })
  }

  return (
    <>
      <label>Peso</label>
      <input name="pesos" onChange={convert} value={valor.pesos} />
      <label>Dólar</label>
      <input name="dolares" onChange={convert} value={valor.dolares} />
    </>
  )
}

function App() {

  return (
    <div className="App">

      <CurrencyConverter />

    </div>
  );
}

export default App;
