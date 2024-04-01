import React from "react";

function HabilitaCaixa() {

    function mostrar() {
        document.getElementById("escondido").hidden = !document.getElementById("checar").checked
    }

    return (
        <div style={{margin:10}}>
            <input onClick={mostrar} type="checkbox" id="checar" />
        Estudei em escola pública.<br/>
        <input hidden type="text" id="escondido" placeholder="Nome da escola" />
        </div>
        );
    };                                     

    export default HabilitaCaixa;