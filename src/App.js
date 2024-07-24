import './App.css';
import { useState } from "react";
import { Task } from "./Task";

function App() {
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
//Vamos a asignar mas informacion a la propia variable const task

//Como el array se inicia en 0, metemos esa pequeña logica de que si, es 0, pasa a ser 1
//y cuando sea diferente a 0, we grab before the current one, y le añadimos +1
const addTask = () => {
const task = {
  id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
  taskName: newTask,
  completed: false,
};
  setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
};

//*Se podria meter todo lo de newTodoList en setTodoList y ahorrarnos 1 linea de codigo, pero lo pongo asi para que sea mas visual
//setTodoList([...todoList, newTask]);

const deleteTask = (id) => {
  //Con el componente que hemos creado, si task es igual a taskname, retornara falso, si es distinto, retornara true
  setTodoList(todoList.filter((task) => task.id !== id));
};

const completeTask = (id) => {
  setTodoList(
    todoList.map((task) => {
      if (task.id === id){
        return { 
          ...task, 
          completed: true
        };
      } else {
        return task;
      }
    }
    )
  );
};

return (
  <div className="App">
    <div className="addTask">
      <input onChange={handleChange} />
      <button onClick={addTask}> Add task </button>
    </div>
    <div className="list">
      {todoList.map((task) => {
        //Dentro del <Task />, vamos a pasar los props del Task.js, y las funciones declaradas previamente
        return (
        <Task
          taskName={task.taskName}
          id={task.id}
          completed={task.completed}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      );
      })}
    </div>
  </div>
);

//Se ha creado el componente Task.js para acortar codigo del App.js, y se ha modificado
//el App.css para implementar colores acorde a la logica que he aplicado anteriormente
}
export default App;