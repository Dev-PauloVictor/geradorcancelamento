import Styles from './styles/App.module.css';

let frases = [
  "foi cancelado(a) por não fazer nada.😌",
    "foi cancelado(a) por contar muita piada ruim.😔",
    "foi cancelado(a) por ser insuportável.😤",
    "foi cancelado(a) por ser insensível 😠",
    "foi cancelado(a) por ser atraente demais.😘",
    "foi cancelado(a) por por se considerar incancelável.🤓",
    "foi cancelado(a) por ser trouxa.😶",
    "foi cancelado(a) por ser uma delícia.😋",
    "foi cancelado(a) por ser corno.👹",
    "foi cancelado(a) por ser uma grande gostoso(a).😍",
    "foi cancelado(a) por ser padrãozinho.🤭",
    "foi cancelado(a) por ser inútil.🗑",
    "foi cancelado(a) por debochar demais.😤",
    "foi cancelado(a) por ser boy lixo.🤮"       
];

function gerarFrase() {
  let frase = frases[
    Math.floor(Math.random() *
      frases.length)
  ]
  console.log(frase);
  document.querySelector('#frase-gerada').textContent=frase;
}

function App() {
  return (
    <>
      <main className={Styles.main}>
        <div className={Styles.card}>
          <h1 className={Styles.titulo}>Gerador de Cancelamento</h1>
          
          <p>
            <button onClick={gerarFrase}  className={Styles.botao}>Gerar meu cancelamento</button>
          </p>
          <p id="frase-gerada" className={Styles.resultado}></p>
        </div>
      </main>
    </>
  );
}

export default App;
