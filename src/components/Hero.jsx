import React from 'react';
import './Hero.css';

function Hero(){
    return (
        <section className='hero'>
            <div className='hero-text'>
                <span className='hero-text-title'>Estudante de Ciência da Computação - PUCPR</span>
                <span className='hero-text-quote'>"Fix the problem, not the blame"</span>
                <span className='hero-text-description'>Meu nome é Felipe Krupa Sokulski, sou um estudante do 4° período de Ciência da Computação, sou apaixonado por computação e estou sempre disposto a aprender mais sobre tecnologia.</span>

            </div>
        </section>
    )
}

export default Hero