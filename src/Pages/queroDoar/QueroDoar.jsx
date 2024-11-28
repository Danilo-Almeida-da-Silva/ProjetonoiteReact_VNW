import livroforms from '../../assets/livroforms.png'
import s from '../../Pages/queroDoar/QueroDoar.module.scss'

export default function Querodoar(){
    return(
        <section className={s.doar1}>

            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>

            <form action="">
            
                <div>
                    <img src={livroforms} alt="Icone de um livro aberto com borda azul" />
                    <h2>Informações do Livro</h2>
                </div>

                <input type="text" name="" id="" placeholder='Titulo' />
                <input type="text" name="" id="" placeholder='Categoria' />
                <input type="text" name="" id="" placeholder='Autor' />
                <input type="text" name="" id="" placeholder='Link da Imagem' />
                <input type="submit" value="Doar" className={s.buttonDoar}/>
            </form>
        </section>
    )
}