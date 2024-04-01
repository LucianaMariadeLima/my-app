import React from 'react';

let novoId = 1;
const listaNomes = []

function ListaDinamica () {
    const [list, setList] = React.useState(listaNomes);
    const [nome, setNome] = React.useState('');

    function atualizar (event) {
        setNome(event.target.value);
    }
function adicionar() {
    if (nome.trim().length < 3){
        alert("O nome deve ter pelo menos 3 letras!"
        }
        else{
          setList(list.concat({id: novoId++, nome: nome}))
        }
        setNome('')
}
    return (
      <div style={{margin: 10}}>
        <input type="text" placeholder='Digite um nome'
          value={nome} onCharge={atualizar} />
        <button onClick={adicionar}>
          Adicionar
        </button>
        <ul>
          {list?.map((item) => (
            <li key={item.id}>id: {item.id} - nome: {item.nome}</li>
           ))}
         </ul>
       </div>
    );
};

export default ListaDinamica;



