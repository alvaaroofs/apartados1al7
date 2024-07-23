import './App.css';
//import { User } from './User';
import { useState } from "react";

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
//Declaramos al inicio el siguiente import: import { useState } from "react";
//Con este codigo, haremos un boton que cada vez que le demos un clic, se incrementara en +1, (o en -1 si en setAge hemos puesto setAge(age -1);).

/*const [age, setAge] = useState(0);

const increaseAge = () => {
  setAge(age + 1);
};

return (
  <div className="App">
    {age}
    <button onClick={increaseAge}> Increase Age </button>
  </div>
);*/




//Ahora, trabajaremos con inputs: (donde podremos introducir informacion por teclado, y nos la ira mostrando por pantalla):

/*const [inputValue, setInputValue] = useState("");

const handleInputChange = (event) => {
  setInputValue(event.target.value);
}; 

return (
  <div className="App">
    <input type="text" onChange={handleInputChange} />
    {inputValue}
  </div>
);*/

//Implementaremos show/hide para un mensaje:

  /*const [showText, setShowText] = useState(true);

  //Importante meter el showText con el ! ya que sera lo que nos cambie de true a false, y de false a true.
  return (
    <div className="App">
      <button onClick={() => {setShowText(!showText)}}> Press to show/hide </button> 
      {showText && <h1>ola k ase</h1>}
    </div>
  );*/


  //Cada vez que le demos clic, cambiaremos de negro a red, y de red a negro:

  /*const [textColor, setTextColor] = useState("black");

  return (
    <div className="App">
      <button 
      onclick={() => {
        setTextColor(textColor === "black" ? "red" : "black");
      }}
      >
        Change color/Set it to default
      </button>
      <h1 style={{ color: textColor }}> MENSAJE POR PANTALLA </h1>
    </div>
  );*/

  //Por ultimo, haremos un contador con opcion a incrementar, decrementar y set to zero:

  /*const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const setToZero = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
      <button onClick={setToZero}>Set counter to 0</button>

    {count}
    </div>
  );*/



//==================================================================================
//5. Creacion de un CRUD (como una base de datos donde podremos crear y eliminar informacion; (O lo que es lo mismo, actualizar su informacion))
//A continuacion, vamos a construir una "app" para administrarnos tareas, donde el verde nos indicara que esta completada, y si sigue
//en blanco, significara que esta en progreso/sin completar


//metemos 1 div dentro de otro div, ya que vamos a dividir en 2 la pagina.
//*importante meter en este caso el import del useState arriba del todo.
//el valor inicial que le damos a useState es un array vacio*
const [todoList, setTodoList] = useState([]);
const [newTask, setNewTask] = useState("");

const handleChange = (event) => {
  setNewTask(event.target.value);
};

//Lo que significa ...todoList , los tres puntos, es un operador que pilla todas las palabras que contengan esa parte inicial
//y despues el todoList
const addTask = () => {
  const newTodoList = [...todoList, newTask];
  setTodoList(newTodoList);
};

//*Se podria meter todo lo de newTodoList en setTodoList y ahorrarnos 1 linea de codigo, pero lo pongo asi para que sea mas visual
//setTodoList([...todoList, newTask]);


return (
  <div className="App">
    <div className="addTask">
      <input onChange={handleChange} />
      <button onClick={addTask}> Add task </button>
    </div>
    <div className="list">
      {todoList.map((task) => {
        return (
        <div>
          <h1>{task}</h1>
        </div>
      );
      })}
    </div>
  </div>
);

//Hasta el minuto 15:47 del course [5]; lo siguiente es deletear las tareas.

//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
//==================================================================================
}

export default App;