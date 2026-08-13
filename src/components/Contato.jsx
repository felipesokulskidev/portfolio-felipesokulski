import './Contato.css'

function Contato(){
    return(
        <section className='contato' id="contato">
            <span className='contato-title'>Vamos conversar!</span>
            <span className='contato-desc'>Estou aberto à novas oportunidades, novos projetos e parcerias. Buscando um estágio na área da tecnologia.</span>
            <div className='contato-links'>
                <a href="mailto:felipe.ksokulski@gmail.com?subject=Contato via portfólio&body=Olá Felipe, vim através do seu portfólio!">
                    Enviar e-mail
                </a>
                <a href="http://linkedin.com/in/felipekrupasokulski">
                    LinkedIn
                </a>
                <a href="https://github.com/felipesokulskidev/">
                    GitHub
                </a>
            </div>
        </section>
    )
}

export default Contato;