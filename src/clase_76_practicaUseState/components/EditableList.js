import React, { useState } from "react";

// EditableList
// Crear un componente EditableList que

// renderice un input y una lista (ul con li)
// cuando se escriba algo en el input y se aprete enter, se debe agregar un li al ul con el texto ingresado
// al apretar enter el input debe vaciarse
// si se hace click en un li, este debe eliminarse de la lista


const EditableList = ({ defaultValue }) => {
  const [lista, setLista] = useState([]);
  const [input, setInput] = useState("");

  const handleClick = (event) => {
    const textoLi = event.target.innerHTML;
    const listaFiltrada = lista.filter((item) => item !== textoLi);
    setLista([...listaFiltrada])
  }
  const handleChange = (event) => { setInput(event.target.value); }
  const handleKey = (event) => {
    if (event.keyCode === 13 && event.target.value !== "") {
      setLista([...lista, event.target.value]);
      setInput("")
    }
  }

  return (
    <>
      <input onChange={handleChange} onKeyDown={handleKey} value={input} type="text" />
      <ul>
        {
          lista.map((item, index) => (
            <li key={index} onClick={handleClick}>{item}</li>
          ))

        }
      </ul>
    </>
  )
}



export default EditableList;
