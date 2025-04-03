import { useEffect, useState } from 'react'
import livrodoado from '../../assets/livrodoado.png'
import s from '../../Pages/livrosDoados/livro.module.scss'
import axios from 'axios'

export default function LivrosDoados() {
  const [livros, setlivros] = useState([])

  const puxarLivros = async () => {
    const resposta = await axios.get(
      'https://api-flask-python-w3my.onrender.com/livros'
    )
    console.log(livros)
    setlivros(resposta.data)
  }

  useEffect(() => {
    puxarLivros()
  }, [])
  return (
    <section className={s.livroiniciodoados}>
      <h2>Livros Doados</h2>
      <section className={s.sectionlivro}>
        {livros.map((item) => (
          <section>
            <img src={item.image_url} alt={`Imagem do livro ${item.titulo}`} />
            <div>
              <h3>{item.titulo}</h3>
            </div>
          </section>
        ))}
      </section>
    </section>
  )
}
