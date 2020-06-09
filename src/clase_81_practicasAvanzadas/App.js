import React from "react"
import useArray from "./hooks/useArray"
import useInput from "./hooks/useInput"

const data = [
  {
    id: 1,
    text: "Ir al súper",
    status: "pending",
  },
  {
    id: 2,
    text: "Comprar comida",
    status: "pending",
  },
  {
    id: 3,
    text: "Preparar cena",
    status: "pending",
  },
]

const App = () => {
  const [value, update, clear] = useInput()

  return (
    <>
      <input value={value} onChange={update} />
      <button onClick={clear}>Borra Todo</button>
      <p>{value}</p>

      {/* <ul>
        {items.map((item) => (
          <li>{JSON.stringify(item)}</li>
        ))}
      </ul>

      <button
        onClick={() =>
          methods.updateById(3, {
            text:
              "Salir a correr como todo el mundo en Palermo en este momento",
          })
        }
      >
        Agregar
      </button> */}
    </>
  )
}

export default App
