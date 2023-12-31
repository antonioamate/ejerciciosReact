import React, { useState } from "react";

function Contador() {
  const [valorContador, setContador] = useState({ Rojo: 0, Amarillo: 0, Verde: 0 });

  function incrementarContador(e) {
    const color = e.target.innerText;
    setContador({ ...valorContador, [color]: valorContador[color] + 1 });
  }
  const total = valorContador.Rojo + valorContador.Amarillo + valorContador.Verde
  const por = {
    Rojo: ((valorContador.Rojo / total) * 100 ).toFixed(2),
    Amarillo: ((valorContador.Amarillo / total) * 100 ).toFixed(2),
    Verde: ((valorContador.Verde / total) * 100 ).toFixed(2)
  }
  return (
    <div>
      <div onClick={incrementarContador}>
        <button className="rojo">Rojo</button>
        <button className="amarillo">Amarillo</button>
        <button className="verde">Verde</button>
      </div>
      <p>Pulsaciones rojo: {valorContador.Rojo}</p>
      <p>Pulsaciones amarillo: {valorContador.Amarillo}</p>
      <p>Pulsaciones verde: {valorContador.Verde}</p>
      <p>Total pulsaciones: {total}</p>
      <p>% Rojo: {por.Rojo}%</p>
      <p>% Amarillo: {por.Amarillo}%</p>
      <p>% Verde: {por.Verde}%</p>
    </div>
  );
}
export default Contador;
