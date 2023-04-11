import './App.css'
import Titulo from './components/Titulo'
import Valor from './components/Valor'
import Botao from './components/Botao'


function App() {
  const url = '../images/image-product-mobile.jpg'

  return (
    <div className="card">
      <img src={url} className="img-capa" alt='Imagem capa'/>
      <div class="container">
        <Titulo/>
        <Valor/>
        <Botao/>
      </div>
    </div>
  )
}

export default App
