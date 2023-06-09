
import React from "react";
import { useEffect, useState } from "react";
import { instance } from "../../../Axios";

function PcaPaso2() {

  const [standarize, setStandarize] = useState([]);

  let diccDatos = [];
  let dataStandarize = [];
  
  

  useEffect(() => {
      instance.get('/pca/standarize')
      .then(function (response) {
        // manejar respuesta exitosa
        setStandarize(response.data);
      })
      .catch(function (error) {
        // manejar error
        console.log(error);
      })
      .finally(function () {
        // siempre sera executado
      });
      
    }, [])

    formatData(); 


    //Convertir el arreglo de objetos a un arreglo de arreglos
    function formatData() {
      if (standarize !== undefined) {

        //Obtener diccionario de datos
        standarize.map(dat => (
          diccDatos.push(Object.keys(dat))
        )); 
        
        diccDatos = diccDatos.slice(1,2);  

        let arr = [];
        if (diccDatos[0] !== undefined) {
          diccDatos[0].map(dat => ( 
            arr.push(dat)
          ))

          diccDatos = arr; 
          
        }

        //Obtener valores de los registros. 
        standarize.map(dat => ( 
          dataStandarize.push(Object.values(dat))
        ));
        
      }
    }


  return (
    <>
        <h3>Paso 2: Se hace una estandarización de los datos</h3>
        <br></br>

        <div className="table-responsive" style={{width: "100%", height: "45vh"}}>
          <table className="table table-striped-columns">
            <thead className="table-light">
              <tr>
                
                {diccDatos.map((head, index) => (
                  <th scope="col" key={index}> {head} </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {dataStandarize.map((i,index) => (
                <tr key={index}>
                  {i.map((it, indexx )=> (
                     <td key={indexx}>
                      {it}
                    </td>
                  ))}
                </tr>
              ))}  
            </tbody>
          </table>
        </div> 
        
        

    </>
  );
}

export { PcaPaso2 };