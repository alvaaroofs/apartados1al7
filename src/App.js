import './App.css';
import Axios from "axios";
import { useEffect, useState } from "react";

//**Con la funcion fetch(), importamos los datos de una API
//==========================================
//7.2 Ejemplo; a partir de la pagina https://api.agify.io/?name=alvaro
function App() {
//Un placeholder es como un texto de ejemplo para que el cuadro de input no este vacio
//le pasamos el enlace con el fetchData, con ...name= pero sin ningun nombre, ya que
//lo vamos a añadir nosotros mismos con el input
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };
//Como vamos a modificar el name, con el input, para añadirlo al enlace de la linea 16, hay que poner estas comillas ``, ya que si ponemos las dobles, no nos pillara lo que le añadamos

//De este modo, cada vez que añadamos un nuevo <input/>, el const [name ...] cambiara
return (
  <div className="App">
    <input 
      placeholder="Example: Alvaro..."
      onChange={(event) => {
        setName(event.target.value);
      }}
    />
    <button onClick={fetchData}> Age predict </button>

    <h1> Name: {predictedAge?.name} </h1>
    <h1> Predicted Age: {predictedAge?.age} </h1>
    <h1> Count: {predictedAge?.count} </h1>

  </div>
  //Al meter la ? despues de predictedAge (u objeto), le estamos diciendo a la API que solamente nos lo de si el useState no es null, ya que al principio lo hemos establecido asi
);
}
export default App;