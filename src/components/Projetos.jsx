import { Star, GitFork, SquareArrowOutUpRight, ArrowUpRight, Sparkles } from 'lucide-react';
import './Projetos.css'

function Projetos(){
    return(
        <div className='projetos'>
            <span className='projetos-title'>Projetos</span>
            <span className='projetos-subtitle'>Acompanhe alguns projetos que venho desenvolvendo no meu GitHub</span>
            
            <div className='projetos-layout'>
                <div className='projetos-card'>
                    <div className='projetos-card-header'>
                        <div className='projetos-card-icon'>
                            <Star size={24} />
                        </div>
                        <div>
                            <h4 className='projetos-card-nome'>Nome do Projeto</h4>
                            <p className='projetos-card-desc'>Breve descrição do que o projeto faz.</p>
                        </div>
                    </div>
                    <div className='projetos-card-foto'>
                        <img src="" alt="" className='foto'/>
                    </div>
                    <div className='projetos-card-stack'>
                        <span className='stack-tag'>React</span>
                        <span className='stack-tag'>CSS</span>
                    </div>

                    <div className='projetos-card-footer'>
                        <a className='projetos-card-link' href="">
                            Ver no GitHub <SquareArrowOutUpRight size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projetos;