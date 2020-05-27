import React, { useState } from "react";

// SearchList
// Crear un componente SearchList que

// renderice un input y una lista (ul con li)
// tome la prop items, que es un array de strings
// renderice cada item como li dentro del ul
// a medida que se escribe en el input, actualice la lista mostrando los items que contengan como substring lo ingresado. (p. ej.: si se ingresa "java" debe mostrarse "javascript")
// la lista al realizar la búsqueda debe mostrarse ordenada alfabéticamente
// cuando el input está vacío, debe mostrar la lista normal con todos los ítems
// EXTRA: si se ingresa algo en la búsqueda, resalta en cada ítem la substring ingresada, por ejemplo, si se ingresa java, javascript debería aparecer como: javascript

const SearchList = ({ items }) => {
  const [resultado, setResultado] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const completeList = items.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  const getFilteredList = (value) => {
    const listaFiltrada = items.filter((item) => item.includes(value)).sort().map((item, index) => (
      <li key={index}>{item}</li>))

    return listaFiltrada.length !== 0 ? listaFiltrada : "No se encuentra el elemento"
  };


  const handleChange = (event) => {
    setResultado(getFilteredList(event.target.value));
    setBusqueda(event.target.value);
  }


  return (
    <>
      <input onChange={handleChange} value={busqueda} />
      <ul style={{ listStyle: "none" }}>{resultado}</ul>
      <ul style={{ listStyle: "none" }}>
        {resultado === "" ? completeList : ""}
      </ul>
    </>
  )
}


export default SearchList;