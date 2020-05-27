import React, { useState } from "react";
// EditableText
// Crear un componente EditableText que

// renderice un elemento p con texto
// toma una prop defaultValue
// el texto inicial del elemento p debe ser el de defaultValue tener un color gris
// cuando se hace click en el texto, se debe reemplazar el texto por un input, el input debe tener como placeholder el valor de defaultValue
// cuando se escribe algo en el input y se apreta enter, se debe reemplazar el input por el elemento p con el texto ingresado
// cuando se clickea nuevamente en el elemento p, el input debe mantener como valor el texto de p (el ingresado anteriormente)
// si se deja el input vacío, p debe mostrar como texto defaultValue


const EditableText = ({ defaultValue }) => {
  const [texto, setTexto] = useState(defaultValue);
  const [contenido, setContenido] = useState("p");
  const [value, setValue] = useState(defaultValue);

  const handleClick = () => { setContenido("input") }
  const handleChange = (event) => { setValue(event.target.value); }
  const handleKey = (event) => {
    if (event.keyCode === 13) {
      setContenido("p");
      setTexto(event.target.value === "" ? defaultValue : event.target.value);
    }
  }

  return (
    <>
      {contenido === "p" ?
        <p onClick={handleClick} style={{ color: "grey" }}>{texto}</p> :
        <input onChange={handleChange} onKeyDown={handleKey} value={value} />
      }
    </>
  )
}

export default EditableText;


