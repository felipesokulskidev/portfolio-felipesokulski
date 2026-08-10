import React from 'react';
import { MapPin, Mail, ArrowDownToLine} from 'lucide-react';
import './Hero.css';

function Hero(){
    return (
        <section className='hero'>
            <div className='hero-text'>
                <div className='hero-text-badge'>
                    <span className='hero-text-local'> <MapPin size = {18}></MapPin> Curitiba • PR</span>
                    <span className='hero-text-title'>Estudante de Ciência da Computação • PUCPR</span>
                </div>
                
                <span className='hero-text-quote'>"Fix the problem, not the blame"</span>
                <span className='hero-text-description'>Olá! Meu nome é Felipe Krupa Sokulski e sou acadêmico de Ciência da Computação do quarto período na Pontifícia Universidade Católica do Paraná. Estou sempre em busca de crescimento e aprendizado contínuo. Tenho interesse em Desenvolvimento Web, Cloud e Banco de dados.</span>
            </div>
            <div className='hero-buttons'>
                <a href="mailto:felipe.ksokulski@gmail.com" className='hero-buttons-email'>
                    <Mail size={18} />
                    Enviar E-mail
                </a>
                <a href="/curriculo-felipe.pdf" download className='hero-buttons-cv'>
                    <ArrowDownToLine size={18} />
                    Baixar Currículo
                </a>
            </div>
        </section>
    )
}

export default Hero