![Tutorial de como usar las PROPS de REACT imagen 1](https://raw.githubusercontent.com/sergiecode/props-react-tutorial/master/props-react-tutorial%20%281%29.png)

![Tutorial de como usar las PROPS de REACT imagen 2](https://raw.githubusercontent.com/sergiecode/props-react-tutorial/master/props-react-tutorial%20%282%29.png)

![Tutorial de como usar las PROPS de REACT imagen 3](https://raw.githubusercontent.com/sergiecode/props-react-tutorial/master/props-react-tutorial%20%283%29.png)

# Tutorial de Props en React

## Introducción

En React, las `props` son una forma de pasar información de un componente a otro. Esto nos permite reutilizar componentes y hacerlos más flexibles. En este tutorial, explicaremos cómo utilizar las `props` en React.

## Ejemplo

Considera el siguiente código:
```
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
```
En este ejemplo, tenemos dos componentes: `App` y `Saludo`. `App` es el componente principal que renderiza tres instancias del componente `Saludo`.
```
    <Saludo nombre="Sergie" />
    <Saludo nombre="Glottis" />
    <Saludo nombre="Pedro" />
```
Aquí, estamos pasando la `prop` `nombre` al componente `Saludo`. Las `props` son objetos que contienen información que se pasa de un componente a otro como argumentos de función. En este caso, estamos pasando el valor de `nombre` como una `prop` a `Saludo`.

En el componente `Saludo`, la `prop` `nombre` se accede a través del objeto `props` que se pasa como argumento de la función. En este caso, estamos utilizando la `prop` `nombre` para renderizar un saludo personalizado.
```
    function Saludo(props) {
      return <h1>Hola, {props.nombre}!</h1>;
    }
```
## Conclusión

En resumen, las `props` son una forma de pasar información de un componente a otro en React. Utilizando las `props`, podemos hacer nuestros componentes más flexibles y reutilizables. En el ejemplo que proporcionaste, vimos cómo pasar la `prop` `nombre` al componente `Saludo` y cómo se puede acceder a esa información dentro del componente para renderizar un saludo personalizado.
