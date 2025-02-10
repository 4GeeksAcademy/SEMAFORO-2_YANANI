import React, { useState } from "react";

const Semaforo = () =>{
    const [color, setColor] = useState("rojo");

        //AQUI DEVERIA IR EL COLOR Y EL CSS DE LA IMAGEN.    
        return (
            <div className="semaforo">
              <div className="caja_fondo">
                <div
                  className={`luz rojo ${color === "rojo" ? "rojo_brillo" : ""}`}
                  onClick={() => setColor("rojo")}
                ></div>

                <div
                  className={`luz amarillo ${color === "amarillo" ? "amarillo_brillo" : ""}`}
                  onClick={() => setColor("amarillo")}
                ></div>

                <div
                  className={`luz verde ${color === "verde" ? "verde_brillo" : ""}`}
                  onClick={() => setColor("verde")}
                ></div>
              </div>
            </div>
          );



};

export default Semaforo;