import './App.css';
import Axios from "axios";
import { useEffect, useState } from "react";

//**Con la funcion fetch(), importamos los datos de una API
//==========================================
//7. Obtener datos de una API usando React, para sacarlo por pantalla:
//Utilizaremos una libreria para fetch data de forma mas sencilla, instalamos el paquete
//mediante npm install axios y tras instalarlo, metemos un import Axios from "axios";
//en la zona de los imports de App.js
function App() {
  const [catFact, setCatFact] = useState("");


  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res.data.fact);
    });
  };

  useEffect(() => {
      fetchCatFact();
  }, []);

return (
  <div className="App">
    <button> Generate Cat Fact </button>
    <p> {catFact} </p>
  </div>
)};

export default App;