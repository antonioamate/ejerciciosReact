import React from "react";

function Contador(props) {
  function incrementarContador(e) {
    console.log(e.target.innerText);
  }

  return (
    <div onClick={incrementarContador}>
      <button className="rojo">Rojo</button>
      <button className="amarillo">Amarillo</button>
      <button className="verde">Verde</button>
    </div>
  );
}
export default Contador;
