import livrodoado from '../../assets/livrodoado.png'
import s from '../../Pages/livrosDoados/livro.module.scss'

export default function LivrosDoados(){
    return(
        <section className={s.livroiniciodoados}>
            <h2>Livros Doados</h2>
       
            <section className={s.sectionlivro}>
                <section className={s.amostradolivro}>
                    <img src={livrodoado} alt="Icone de um livro fechado com capa vermelha para representar o livro doado com o Titulo escrito nele" />
                    <div> 
                        <p>O protagonista</p>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
                </section>
            </section>
        </section>
     
    )
}