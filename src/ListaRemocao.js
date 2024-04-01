import React from 'react';

const listaNomes = [
    {id:1,nome:"Sérgio"},
    {id:2,nome:"Ivone"},
    {id:3,nome:"Lucas"},
    {id:4,nome:"Daniel"},
]

function ListaRemocao () {
    const [list, setList] = React.useState(listaNomes);
    const [id, setId] = React.useState('');

    function atualizar(event) {
        setId(event.target.value);
    }
    function remover (){
        setList(list => list.filter((item) =>
        item.id !==Number(id)
        ))
    };
    return (
        <div style={{margin: 10}}>
            <input type="text" placeholder='Digite um id'
            value={id} onChange={atualizar} />
            <button onClick={remover}>
                remover
                </button>
                <ul>
                    {list?.map((item) => (
                        <li key={item.id}>id: {item.id} - nome: {item.nome}</li>
                    ))}
                    </ul>
                    </div>
                    );
};

export defaut ListaRemocao;