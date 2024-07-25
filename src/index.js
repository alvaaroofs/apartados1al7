import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//El React.StrictMode, es recomendable dejarlo, ya que nos ayuda a escribir un mejor codigo
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

//Metemos los React.StrictMode como comentario para que no nos haga un fetch
//dos veces