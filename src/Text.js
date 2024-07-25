import React from "react";
import { useState, useEffect } from "react";

export const Text = () => {
    const [text, setText] = useState("");
//Al tener el React.Strictmode en el index.js, si vamos a la consola de inspeccionar, al ocultar el texto y volver a sacarlo,
//nos tira COMPONENT UNMOUNTED (al ocultarlo), y al sacarlo, nos tira COMPONENT MOUNTED, COMPONENT UNMOUNTED y de nuevo COMPONENT MOUNTED;
//esto es porque el React.Strictmode lo esta forzando, ya que estaria comprobando si el useEffect funciona correctamente
    useEffect(() => {
        console.log("COMPONENT MOUNTED");
        
        return () => {
            console.log("COMPONENT UNMOUNTED");
        }
    }, [text]);
    //**Si queremos que quede registrado en la consola unicamente cuando aparece y desaparece, simplemente le pasamos
    //un empty array; si queremos que cada vez que haya una variacion en el texto quede registrado, en vez de [] metemos
    //[text]; (esto es muy util mas adelante, para pasarle info a APIs) linea 15.

    //Con la estructura de este codigo, cada vez que metamos con el input texto por pantalla, el {text} que se encuentra entre 
    //las etiquetas <h1></h1> (linea 30) sera actualizado al momento, por lo que su valor cambiara cada vez que cambiemos el input
    return (
        <div>
            <input 
                onChange={(event) => {
                    setText(event.target.value);
                }}
            />

            <h1> {text} </h1>
        </div>
    );
};