import './Sobre.css'
import pucLogo from '../assets/pucpr-logo.png';

function Sobre(){
    return(
        <section className="sobre">
            <span className='sobre-title'>Sobre mim</span>
            <span className='sobre-text'> Ao longo da minha trajetória acadêmica e pessoal, desenvolvi <span className='sobre-text-span'>alta facilidade de aprendizado</span> para assimilar rapidamente novas tecnologias e conceitos, demonstrando <span className='sobre-text-span'>adaptabilidade diante de diferentes cenários,</span> aliada à proatividade para antecipar necessidades, sugerir soluções e contribuir com melhorias contínuas nos processos, com um perfil que <span className='sobre-text-span'>busca constantemente novos conhecimentos de forma independente</span> e os aplica de maneira prática em projetos, fortalecendo ainda mais a capacidade de crescimento e evolução dentro das equipes.</span>
            <span className='formacao-title'>Formação</span>
            <div className='formacao'>
                
                <div className='formacao-logo-puc'>
                    <img src={pucLogo} alt="" />
                </div>
                
                <div className='formacao-texto'>
                    
                    <span className='formacao-faculdade'>Ciência da Computação</span>
                    <span className='formacao-local'>Pontifícia Universidade Católica do Paraná </span>
                    <span className='formacao-conclusao'>Jan 2025 - Dez 2028 • 4°/8° semestre</span>
                </div>
                
            </div>
            <div className='stack'>

            </div>
        </section>
    )
}

export default Sobre;