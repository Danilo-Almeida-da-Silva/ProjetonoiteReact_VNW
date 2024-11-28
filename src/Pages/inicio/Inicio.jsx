import s from './inicio.module.scss'
import comunidade from '../../assets/comunidade.png'
import leitura from '../../assets/leitura.png'
import transformacao from '../../assets/transformacao.png'
import balanca from  '../../assets/balanca.png'

export default function Inicio(){
    return(
        <main>
            <section className={s.primeiraSessaoInicio}>
                <h2>VENHA FAZER PARTER DA MAIOR REDE DE DOAÇÃO</h2>
            </section>

            <section className={s.porqueDoarSection}>
                <h2>Por que devo doar?</h2>
                <section className={s.containerCards}>
                    <section>
                        <img src={comunidade} alt="Imagem de um icone de bonecos en curculo representando mãos dadas entras as pessoas para ser a representação da comunidade." />
                        <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>
                    <section>
                        <img src={leitura} alt="Uma imagem de um icone representando uma pessoa lendo um livro" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    <section>
                        <img src={transformacao} alt="Uma imagem de uma mão em forma de punho levantada para o alto e varios icones de pessoas abaixo dessa mão para representar uma transformação." />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    <section>
                        <img src={balanca} alt="Imagem de uma Balança de dois lado representando a Balança da justiça." />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </section>
            </section>
        </main>
    )
}