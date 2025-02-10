import React, { useState } from "react";

const Semaforo = () => {
  const [color, setColor] = useState("rojo");
  const [tienePurpura, setColorPurpura] = useState(false);

  // CAMBIAR COLOR
  const cambiarColor = () => {
      if (color === "rojo") setColor("amarillo");
      else if (color === "amarillo") setColor("verde");
      else if (tienePurpura && color === "verde") setColor("purpura");
      else setColor("rojo");
  };
     
    //AÑADIR COLOR
    const añadirColor = () => {
      setColorPurpura(true);
    } 

    return (
        <div className="semaforo-container">
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

                      {tienePurpura && (
                        <div
                            className={`luz purpura ${color === "purpura" ? "purpura_brillo" : ""}`}
                            onClick={() => setColor("purpura")}
                        ></div>
                      )}
                    
                </div>
            </div>

            <button className="boton_cambiar" onClick={cambiarColor}>
                Cambiar Color
            </button>

            {!tienePurpura && (
            <button className="boton_agregar" onClick={añadirColor}>
                Añadir color
            </button>
             )}

        </div>
    );
};

export default Semaforo;
