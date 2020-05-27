import React, { useState } from "react";
// ScoreBoard
// Crear un componente ## ScoreBoard que renderice un input y una lista de PlayerScore que

// al escribir algo en el input y apretar "enter", agregue un nuevo PlayerScore a la lista
// si el input está vacío, no debe agregar nada
// cuando se apreta "enter", el input debe vaciarse
// PlayerScore contiene la prop player que toma un string, y se llena con el valor ingresado en el input
// PlayerScore renderiza un elemento p para mostrar el nombre (contenido en la prop player), un elemento p para mostrar el puntaje (que comienza en 0) y dos botones, uno para incrementar el puntaje y otro para disminuirlo
// Ejemplo

// [Ingrese un nuevo nombre...]

// Jeff    100 puntos    [+][-]
// Britta  50 puntos     [+][-]
// Abed    500 puntos    [+][-]
// Troy    200 puntos    [+][-]
// Annie   250 puntos    [+][-]
// Shirley 400 puntos    [+][-]
// Pierce  20 puntos     [+][-]
const PlayerScore = ({ player }) => {
  const [puntos, setPuntos] = useState(0);
  const handleClick = (event) => {
    if (event.target.innerHTML === "+") {
      setPuntos(puntos + 50)
    } else {
      puntos !== 0 ? setPuntos(puntos - 50) : setPuntos(0)
    }
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "50%" }}>
        <div style={{ display: "flex" }} >
          <p>{player}</p>
          <p style={{ paddingLeft: 20 }}>{puntos}</p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: 20 }} >
          <button style={{ height: 30, backgroundColor: "#6585ab", margin: 5, outline: 0, border: 0, width: 30 }} onClick={handleClick}>+</button>
          <button style={{ height: 30, backgroundColor: "#6585ab", outline: 0, border: 0, width: 30 }} onClick={handleClick}>-</button>
        </div>
      </div>
    </>
  )
}



const ScoreBoard = () => {
  const [playerList, setPlayerList] = useState([])
  const [value, setValue] = useState("");

  const handleChange = (event) => { setValue(event.target.value); }
  const handleKey = (event) => {
    if (event.keyCode === 13 && event.target.value !== "") {
      setValue("");
      setPlayerList([...playerList, event.target.value])
    }
  }



  return (
    <>
      <input placeholder={"Ingrese un nuevo jugador"} onChange={handleChange} onKeyDown={handleKey} value={value} />
      {playerList.map((player, index) => <PlayerScore key={index} player={player} />)}
    </>
  )

}


export default ScoreBoard;
