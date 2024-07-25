import './App.css';
import { useState } from "react";
import { Text } from "./Text";

//**He creado un nuevo componente Text.js */

function App() {
//==================================================================================
//6. En este apartado aprenderemos a crear un lifecycle (o ciclo de vida) y el useEffect();
//Para el lifecycle tendremos como un historial de todo lo que le ha pasado a x componente;
//Hay que tener claros 3 conceptos (los posibles estados de un componente en React):
//mounting: componentes que aparecen en la pantalla; appear
//updating: que el componente esta cambiando
//unmounting: componentes que dejan de aparecer en la pantalla; disappear
const [showText, setShowText] = useState(false);
//Lo que hace el boton es que, cada vez que le demos clic, cambiara el useState a un estado diferente
//Si nos metemos con inspeccionar, veremos que cada vez que le demos al boton, el div del input del texto desaparecera
return (
  <div className="App">
    <button onClick={() => {
      setShowText(!showText);
    }}
    >
      Show the text
    </button>

    {showText && <Text />}
  </div>
);
}
//useState y useEffect son dos hooks imprescindibles en React, (siendo el segundo imprescindible); se puede tener
//un proyecto sin useState, pero no sin useEffect
//useEffect: hara algo en funcion del stage en el que se encuentre; en este caso, logea en la consola cada vez que
//se presione el boton para ocultar o mostrar el texto.
export default App;