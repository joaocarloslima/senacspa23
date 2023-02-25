
import './App.css'

import CardFilme from './components/CardFilme/CardFilme'

export default function App() {

  const homemFormiga = {
    titulo: "Homem Formiga",
    nota: "7.0",
    poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/3aJNiESDK7quCw9IpsUCFXqvq24.jpg"
  }
  const gatoDeBotas = {
    titulo: "Gato de Botas",
    nota: "9.0",
    poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/i0tScFVNCcgDzz9AgjYd3LDXGTO.jpg"
  }

  return (
    <div className="App">
      <h1>Senac Filmes</h1>

      <h2>Filmes em Alta</h2>

    <section className='secaoFilmes'>
      <CardFilme filme={homemFormiga} />
      <CardFilme filme={gatoDeBotas} />
{/* 
      <CardFilme titulo="Rogai por nós" nota="9.0" poster="https://www.themoviedb.org/t/p/w220_and_h330_face/3aJNiESDK7quCw9IpsUCFXqvq24.jpg"/>
      <CardFilme titulo="Homem Formiga" nota="7.0" poster="https://www.themoviedb.org/t/p/w220_and_h330_face/i0tScFVNCcgDzz9AgjYd3LDXGTO.jpg"/>
      <CardFilme titulo="Lugar Silencioso" nota="8.5" poster="https://www.themoviedb.org/t/p/w220_and_h330_face/nZ69WTv7n01womaNz3SHa4inA9x.jpg"/>
     */}
    </section>

    </div>
  )
}


