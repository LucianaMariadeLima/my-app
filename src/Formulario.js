import React, {useState} from "react";

function Formulario () {
    const [nome, setNome] = useState('');

    return (
        <div style={{margin: 10}}>
        <form>
        <input type="text" placeholder="Digite aqui" value={nome}
        onChange={(e)=> setNome(e.target.value)}/>
    <br/><br/><label>Nome Digitado: </label>
    <label style={{background:"beige'}}>{nome}</label>
    </form>
    </div>
    );
}

export defalt Formulario;