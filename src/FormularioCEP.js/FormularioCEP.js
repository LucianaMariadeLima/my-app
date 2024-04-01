import React, {useState, useEffect} from "react";

function FormularioCEP () {
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");

    useEffect(() => {
        if (cep.length >= 8) {
            fetch('https://viacep.com.br/ws/${cep.replace("-", "")}/json/')
            .then((res) => res.json())
            .then((data) => {
                setRua(data.logradouro);
                setBairro(data.bairro);
                setCidade(data.localidade);
            });
        }
    }, [cep]);

        return (
          <div style={{margin: 10}}>
            <form>
                <label>Digite seu CEP:</label><br/>
                <input type="text" name="cep" value={cep} onChange={(e) =>
                   setCep(e.target.value)}/><br/>
                <label>Rua:</label><br>/></br>
                <inputtype="text" name="rua" readOnly={true} value={rua} /><br/>
                <label>Bairro:</label><br/>
                <input type="text" name="bairro" readOnly={true} value={bairro} /><br/>
                <label>Cidade:</label><br/>
                <input type="text" name="cidade" readOnly={true} value={cidade} /><br/>
            </form>
          </div>
        );
}

export default FormularioCEP;