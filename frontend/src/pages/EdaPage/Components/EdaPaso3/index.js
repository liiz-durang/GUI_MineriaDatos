import React from "react";
import '../../../index.css';
import { EdaPaso31 } from "./components/EdaPaso31";
import { EdaPaso32 } from "./components/EdaPaso32";
function EdaPaso3() {

   
  
    return(

        <>
        <h3>Paso 3: Detección de valores atípicos</h3>
        <br></br>
        <EdaPaso31/>
        <br></br><br></br>
        <EdaPaso32/>
        </>
    );
    
}

export { EdaPaso3 }

/*
Metodo del codo - Identificar el error. Ese error es la difrerencia del elemento al que pertenece y al centroide. 
En un inicio el error es grande. Pero conforme se vayan obteniendo tras configuraciones de k, esta empieza a disminuir.
*/ 
