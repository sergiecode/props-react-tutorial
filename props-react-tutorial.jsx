

import React from 'react';

function Saludo(props) {
  return <h1>Hola, {props.nombre}!</h1>;
}

export default function App() {
  return (
    <div>
      <Saludo nombre="Sergie" />
      <Saludo nombre="Glottis" />
      <Saludo nombre="Pedro" />
    </div>
  );
}
