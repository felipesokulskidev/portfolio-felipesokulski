import './Contato.css'
import { Mail, SquareArrowOutUpRight } from 'lucide-react';


function Contato(){
    return(
        <section className='contato' id="contato">
            <span className='contato-title'>Vamos conversar!</span>
            <span className='contato-desc'>Estou aberto à novas oportunidades, novos projetos e parcerias. Buscando um estágio na área da tecnologia.</span>
            <div className="contato-links">
                <a href="mailto:felipe.ksokulski@gmail.com?subject=Contato via portfólio&body=Olá Felipe, vim através do seu portfólio!" className="contato-links-item">
                    <Mail size={16} />
                    Enviar e-mail
                </a>
                <a href="http://linkedin.com/in/felipekrupasokulski" target="_blank" rel="noopener noreferrer" className="contato-links-item">
                    LinkedIn
                    <SquareArrowOutUpRight size={16} />
                </a>
                <a href="https://github.com/felipesokulskidev/" target="_blank" rel="noopener noreferrer" className="contato-links-item">
                    GitHub
                    <SquareArrowOutUpRight size={16} />
                </a>
            </div>
        </section>
    )
}

export default Contato;