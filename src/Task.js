export const Task = (props) => {

    //Con la pequeña condicion del primer dic, al estar completed se tornara verde, y si no le damos al button, seguira blanco
    return (
      <div
        className="task"
        style={{ backgroundColor: props.completed ? "green" : "white" }}
      >

        <h1>{props.taskName}</h1>
        <button onClick={() => props.completeTask(props.id)}> Complete </button>
        <button onClick={() => props.deleteTask(props.id)}> Delete Task </button>
      </div>
    );
  };