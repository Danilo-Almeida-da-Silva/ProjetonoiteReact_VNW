import axios from 'axios'
import livroforms from '../../assets/Livroforms.png'
import s from '../../Pages/queroDoar/QueroDoar.module.scss'
import { useState } from 'react'

export default function Querodoar() {
  const [titulo, setTitulo] = useState('')
  const [categoria, setCategoria] = useState('')
  const [autor, setAutor] = useState('')
  const [image_url, setImage_url] = useState('')

  const capturaTitulo = (e) => {
    setTitulo(e.target.value)
  }

  const capturaCategoria = (e) => {
    setCategoria(e.target.value)
  }

  const capturaAutor = (e) => {
    setAutor(e.target.value)
  }

  const capturaImage_url = (e) => {
    setImage_url(e.target.value)
  }

  const envioDados = async () => {
    const enviarParadados = {
      titulo,
      categoria,
      autor,
      image_url,
    }
    await axios.post(
      'https://api-flask-python-w3my.onrender.com/doar',
      enviarParadados
    )
  }

  return (
    <section className={s.sectiondoar}>
      <p>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro!
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <img src={livroforms} alt='Icone de um livro aberto com borda azul' />
          <h2>Informações do Livro</h2>
        </div>

        <input
          type='text'
          name=''
          id=''
          placeholder='Titulo'
          onChange={capturaTitulo}
        />
        <input
          type='text'
          name=''
          id=''
          placeholder='Categoria'
          onChange={capturaCategoria}
        />
        <input
          type='text'
          name=''
          id=''
          placeholder='Autor'
          onChange={capturaAutor}
        />
        <input
          type='text'
          name=''
          id=''
          placeholder='Link da Imagem'
          onChange={capturaImage_url}
        />
        <input
          type='submit'
          value='Doar'
          className={s.buttonDoar}
          onClick={envioDados}
        />
      </form>
    </section>
  )
}
