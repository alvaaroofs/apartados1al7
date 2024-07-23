import './App.css';
import { User } from './User';
function App() {
//Para llamar al componente User, se haria de forma abreviada <User />
//Para crear componentes y asignar valor a las variables, se hace con const (nombre **primera en mayuscula) = () => {};
//Los props los props son mecanismos que permiten transmitir datos desde un componente principal
//a un componente secundario (Al llamarlo en el App, le paso los atributos y ya) +Ej:

//==================================================================================
//1. Uso basico de etiquetas y declaracion de variables
  /* const name = "Alvaro" //si le meto <h1>Alvaro</h1> como valor, con poner {name} se me guarda
  const age = <h2> 21</h2>
  const email = <h3>afernandezs@uxcale.com</h3>
  const description = <div>Frase de prueba para ver como queda el texto escrito</div>
  const user = (
    <div>
      {name}
      {age}
      {email}
    </div>
  );
  return (
  <div className="App"> Empezando React; 
    <h1>{name}</h1>
    <h2>{name}</h2>
    <h3>{name}</h3>
    <h4>{name}</h4>
    <h5>{name}</h5>
    <h6>{name}</h6>
    <div>
      {age}
      {email}
      {description}
    </div>
      {user}
      <User name="Paco" age={400} email="example@example.com"/> //Los numeros van entre { } y el texto entre dobles comillas " "
      <Salary quantity="500000" nameJob="Programmer" enterprise="Netflix"/>
      
  </div>
  );
}

//==================================================================================
//2. Creacion de componentes y uso de props
const User = (props) =>{
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
    </div>
  );
}

const Salary = (props) => {
  return (
    <div>
      <h1>{props.quantity}</h1>
      <h1>{props.nameJob}</h1>
      <h1>{props.enterprise}</h1>
    </div>
  );*/

//==================================================================================
//3. Operadores, listas y css en react
/*const age = 65;

//if-else; se le pueden meter operadores logicos como && (si ambas se cumplen)

if (age >= 18 && age <= 65){
  return <h1>OVER AGE</h1>;
}else{
  return <h1>UNDER AGE</h1>;
}*/

//Otra forma mas abreviada; dentro de los divs, abrimos {(Condicion) ? (Si es true, mensaje entre <h1></h1>) : (Si es false, mensaje2 entre <h1></h1>)}
//Se pueden implementar colores dentro del codigo haciendo uso de <h1 style={{ ... }}> </h1>
/*const age = 64;
const isBlue = true;

//&& puede usarse para condiciones; (indica si es verdadero)

  return (
    <div className="App">
      {age >= 65 ? <h1>YOU CAN RETIRE</h1> : <h1>YOU CAN'T RETIRE</h1>}
      <h1 style={{color: isBlue ? "blue" : "yellow"}}> MESSAGE IN COLOR </h1>

      {isBlue && <button> CLIC ME </button>}
      
    </div>
);*/


//Listas
/*const names = ["Pipo", "Pepo", "Papo", "Pepe"];

//Haremos uso de .map *Con .map nos permite recorrer todos los valores del array previamente declarado
//names.map((name, key) donde name es el valor que tiene en x posicion; Ej: "Pipo", key es la posicion que ocupa en el array

return (
  <div className="App">
    {names.map((name, key) => {
        return <h1 key={key}> {name}</h1>
    })}
  </div>
);*/

//Para hacer una lista con 2 variables o mas (objetos):
//Obv, al haber dos componentes, dentro del return nos tocaria meter un <div> ... </div>, ya que vamos a meter 2 o mas piezas de info.
/*const users = [
  { name: "Alvaro", age: 99},
  { name: "Pedro", age: 76},
  { name: "Luis", age: 33},
];
 
//Sin hacer uso de componentes externos
return (
  <div className="App">
    {users.map((user, key) => {
        return (
        <div>
          {user.name} {user.age}
        </div>
        );
    })}
  </div>
);

//Con componentes externos
return (
  <div className="App">
    {users.map((user, key) => {
        return <User name={user.name} age={user.age}/>
    })}
  </div>
);

//Haciendolo de forma mas pro, y que quede mas limpio; creamos un User.js, creamos un componente dentro de este
//metemos un export en ese file, y un import en este (arriba del todo del App.js)-> import { User } from './User';
//de forma que se conectan entre si, y el codigo queda mas limpio

//Contenido del User.js
const User = (props) => {
  return (
    <div>
      {props.name} {props.age}
    </div>
  );
};*/

//Ejemplo del video de youtube; planetas, con sus nombres y decir si es un gas planet o no:

/*const planets = [
  { name: "Mars", isGasPlanet: "false"},
  { name: "Earth", isGasPlanet: "false"},
  { name: "Jupiter", isGasPlanet: "true"},
  { name: "Venus", isGasPlanet: "false"},
  { name: "Neptune", isGasPlanet: "true"},
  { name: "Uranus", isGasPlanet: "true"},
];

return (
  <div className="App">
    {planets.map(
      (planet, key) => planet.isGasPlanet && <h1> {planet.name} </h1> //Con esta linea indicamos si es true, lo sacamos por pantalla
      //(planet, key) => !planet.isGasPlanet && <h1> {planet.name} </h1> //Con esta linea indicamos que si es false, lo sacamos por pantalla
    )}
  </div>
);*/


//==================================================================================
//4. UseStates
let age = 0;  //Usaremos let, ya que const es para variables constantes

const increaseAge = () => {
  age = age +1;
  console.log(age);
};

return (
  <div className="App">
    {age}
    <button onClick={increaseAge}> Increase Age </button>
  </div>
);







//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
}

export default App;