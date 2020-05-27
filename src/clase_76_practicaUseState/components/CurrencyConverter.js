import React, { useState } from "react";


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

export default CurrencyConverter;

