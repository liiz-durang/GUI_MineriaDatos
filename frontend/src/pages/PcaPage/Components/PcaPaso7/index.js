
import React from "react";
import { instance } from "../../../Axios";
import { useState, useEffect } from "react";
import '../../../index.css';
import Table from "react-bootstrap/esm/Table";

function PcaPaso7({diccDatos, displayTable}) {

  const [variables, setVariables] = useState([]);

  useEffect(() => {

    instance.get('/pca/variables')
    .then(function (response) {
      setVariables(response.data.variables)
      console.log(variables);
    })
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
    .finally(function () {
      // siempre sera executado
    });
  }, []);



  return (
    <>
        <h3>Paso 7. Se eliminan las variables necesarias de acuerdo a PCA</h3>
        <br></br>

        <h4>Atributos antes de PCA</h4>

        
        <Table className="table table-striped-columns">
            <thead className="table-light">
              <tr>
                {variables.map((head, index) => (
                  <td scope="col" key={index}> 
                  {head} 
                  </td>
                ))}
              </tr>
            </thead>
          </Table>
          

        <br></br>
        <h4>Atributos después de PCA</h4>

        {displayTable && (
        <Table className="table table-striped-columns">
            <thead className="table-light"> 
              <tr>
                  {diccDatos.map((variable, index) => (
                    <td scope="col" key={index}>
                      {variable}
                    </td>
                  ))}
          
              </tr>
            </thead>
          </Table>
        )} 
    </>
  );
}

export { PcaPaso7 };