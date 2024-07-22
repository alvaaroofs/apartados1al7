import './App.css';

function App() {
  const name = "Alvaro" //si le meto <h1>Alvaro</h1> como valor, con poner {name} se me guarda
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
      <User name="Paco" age={400} email="example@example.com"/>
      <Salary quantity="500000" nameJob="Programmer" enterprise="Netflix"/>
      
  </div>
  );
}
//Para llamar al componente User, se haria de forma abreviada <User />

//Para crear componentes, se hace con const (nombre **primera en mayuscula) = () => {};

//Los props los props son mecanismos que permiten transmitir datos
//desde un componente principal a un componente secundario (Al llamarlo en el App, le paso los atributos y ya)
//Ej:

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
  );
}
export default App;