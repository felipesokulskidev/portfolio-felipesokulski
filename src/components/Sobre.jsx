import './Sobre.css'
import pucLogo from '../assets/pucpr-logo.png';
import cpmLogo from '../assets/cpmpr-logo.png';

function Sobre(){
    return(
        <section className="sobre" id="sobre">
            <span className='sobre-title'>Sobre mim</span>
            <span className='sobre-text'> Ao longo da minha trajetória acadêmica e pessoal, desenvolvi <span className='sobre-text-span'>alta facilidade de aprendizado</span> para assimilar rapidamente novas tecnologias e conceitos, demonstrando <span className='sobre-text-span'>adaptabilidade diante de diferentes cenários,</span> aliada à proatividade para antecipar necessidades, sugerir soluções e contribuir com melhorias contínuas nos processos, com um perfil que <span className='sobre-text-span'>busca constantemente novos conhecimentos de forma independente</span> e os aplica de maneira prática em projetos, fortalecendo ainda mais a capacidade de crescimento e evolução dentro das equipes.</span>
            <span className='formacao-title'>Formação</span>
            <div className="formacao-lista">
                <div className="formacao">
                    <div className="formacao-logo-puc">
                        <img src={pucLogo} alt="PUCPR" />
                    </div>
                    <div className="formacao-texto">
                        <span className="formacao-faculdade">Ciência da Computação</span>
                        <span className="formacao-local">Pontifícia Universidade Católica do Paraná</span>
                        <span className="formacao-conclusao">Jan 2025 - Dez 2028 • 4°/8° semestre</span>
                    </div>
                </div>

                <div className="formacao">
                    <div className="formacao-logo-puc">
                        <img src={cpmLogo} alt="Colégio da Polícia Militar" />
                    </div>
                    <div className="formacao-texto">
                        <span className="formacao-faculdade">Ensino Médio</span>
                        <span className="formacao-local">Colégio da Polícia Militar do Paraná</span>
                        <span className="formacao-conclusao">Jan 2022 - Dez 2024</span>
                    </div>
                </div>
            </div>

            <span className='formacao-title'>Experiência</span>
            <div className="formacao-lista">
                <div className="formacao">
                    <div className="formacao-logo-puc">
                        <img src={pucLogo} alt="PUCPR" />
                    </div>
                    <div className="formacao-texto">
                        <span className="formacao-faculdade">Bolsista de Iniciação Científica (PIBIC)</span>
                        <span className="formacao-local">Pontifícia Universidade Católica do Paraná — desenvolvimento de um sistema de detecção dinâmica de malware Android</span>
                        <span className="formacao-conclusao">2026 - 2027</span>
                    </div>
                </div>
            </div>

            <span className='stack-title'>Ferramentas</span>

            <div className='stack'>
                <div className='stack-pill'>
                    <i className="devicon-git-plain colored stack-pill-icon"></i>
                    <span>Git</span>
                </div>
                <div className='stack-pill'>
                    <i className="devicon-github-original stack-pill-icon"></i>
                    <span>GitHub</span>
                </div>
                <div className='stack-pill'>
                    <i className="devicon-python-plain colored stack-pill-icon"></i>
                    <span>Python</span>
                </div>
                <div className='stack-pill'>
                    <i className="devicon-java-plain colored stack-pill-icon"></i>
                    <span>Java</span>
                </div>
                <div className='stack-pill'>
                    <i className="devicon-html5-plain colored stack-pill-icon"></i>
                    <span>HTML</span>
                </div>
                <div className='stack-pill'>
                    <i className="devicon-css3-plain colored stack-pill-icon"></i>
                    <span>CSS</span>
                </div>
                <div className='stack-pill'>
                    <i className="devicon-react-original colored stack-pill-icon"></i>
                    <span>React</span>
                </div>
                <div className='stack-pill'>
                    <i className="devicon-javascript-plain colored stack-pill-icon"></i>
                    <span>JavaScript</span>
                </div>
                <div className='stack-pill'>
                    <i className="devicon-typescript-plain colored stack-pill-icon"></i>
                    <span>TypeScript</span>
                </div>
                <div className='stack-pill'>
                    <i className="devicon-mysql-plain colored stack-pill-icon"></i>
                    <span>MySQL</span>
                </div>
                <div className='stack-pill'>
                    <i className="devicon-supabase-plain colored stack-pill-icon"></i>
                    <span>Supabase</span>
                </div>
            </div>
        </section>
    )
}

export default Sobre;