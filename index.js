














import reportwebvitals from './reportWebVitals';
import Condicional from './Condicional';
import Propriedades from './Propriedades'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Propriedades conteudo= "propriedades com react" />

    </React.StrictMode>
);




const frase = "aprendendo react"
const root = ReactDOM.creatRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Propriedades conteudo= {frase}/>
    </BrowserRouter>
);











