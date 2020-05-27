import React, { useState } from "react";


// Crear un component Form que
// renderice algunos inputs (3 o 4) y un button que diga "Enviar"
// al apretar enviar, debe chequear que los inputs no estén vacíos
// si alguno está vacío, debe mostrar un mensaje que diga "Por favor, complete todos los campos"
// si ninguno está vacío, debe mostrar un mensaje que diga "Gracias por completar el formulario, sus datos han sido guardados" y debe vaciar todos los campos



const FormularioEnvio = () => {

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


export default FormularioEnvio;
