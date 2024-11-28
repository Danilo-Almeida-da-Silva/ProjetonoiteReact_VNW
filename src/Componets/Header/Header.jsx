
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import logoLivro from '../../assets/logoLivro.png'
import Inicio from '../../Pages/inicio/Inicio'
import LivrosDoados from '../../Pages/livrosDoados/LivrosDoados'
import QueroDoar from '../../Pages/queroDoar/QueroDoar'
import s from '../../componets/Header/header.module.scss'
import lupa from '../../assets/lupa.png'



export default function Header(){
    return(
        <BrowserRouter>
            <header className={s.header}>
            <section className={s.logoHeader}>
                    <img src={logoLivro} alt="Imagem de ilustração de livro com capa azul aberto." />
                    <h1>Livros Vai na Web</h1>
                </section>

                <section>        
                    
                </section>
                <nav className={s.navHeader}>
                    <ul>
                        <li><Link className={s.Link} to="/">Inicio</Link></li>
                        <li><Link className={s.Link} to="/LivrosDoados">Livros Doados</Link></li>
                        <li><Link className={s.Link} to="/QueroDoar">Quero Doar</Link></li>
                    </ul>
                </nav>
                <section className={s.barraDeBusca}>
                    <input type="search" name="" id="barraDeBusca" placeholder='O que você procura? '></input>
                    <button><img src={lupa} alt="Imagem de uma lupa branca de pesquisa"></img></button>
                </section>
            </header>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/LivrosDoados" element={<LivrosDoados />} />
                <Route path="/QueroDoar" element={<QueroDoar />} />
             </Routes>
        </BrowserRouter>
    )
}