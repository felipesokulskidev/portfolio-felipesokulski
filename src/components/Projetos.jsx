import { Star, SquareArrowOutUpRight } from 'lucide-react';
import './Projetos.css'

const projetos = [
    {
        id: 1,
        nome: "Sistema de Triagem - SXF",
        descricao: "Sistema web de triagem clínica para a Síndrome do X Frágil, desenvolvido em parceria com o Instituto Buko Kaesemodel para reduzir o subdiagnóstico da condição no Brasil. Atuei no frontend com React, construindo o checklist interativo, o cálculo de score de risco e a geração de relatórios em PDF.",
        tecnologias: ["React", "Python", "CSS", "MySQL"],
        link: "https://github.com/joaopdiasdev/IBK_Grupo_6"
    },
    {
        id: 2,
        nome: "Guess The Flag",
        descricao: "Quiz interativo de bandeiras com dois modos de jogo (múltipla escolha ou resposta digitada) e filtro por continente. Desenvolvido em React com TypeScript, usando Context API para gerenciar configurações globais e normalização de texto para validar respostas. Projeto em desenvolvimento.",
        tecnologias: ["React", "TypeScript", "CSS", "Supabase"],
        link: "https://github.com/felipesokulskidev/guess-the-flag",
        emDesenvolvimento: true
    },
    {
        id: 3,
        nome: "Spotify UI Clone",
        descricao: "Clone visual da interface do Spotify, desenvolvido com HTML5, CSS3 e JavaScript puro. Conteúdo dinâmico gerado via arrays, scroll horizontal nos cards e efeitos de hover fiéis à identidade visual original.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/felipesokulskidev/spotify" 
    },
    {
        id: 2,
        nome: "Simulador de Molduras",
        descricao: "Protótipo web para visualização de molduras personalizadas, permitindo enviar uma foto, escolher tamanho e moldura e visualizar o quadro pronto em tempo real, com escala proporcional real e reposicionamento da imagem. Desenvolvi o simulador completo em React, incluindo a lógica de renderização do preview, o cálculo de escala e o componente único que concentra toda a interface.",
        tecnologias: ["React", "Vite", "Tailwind CSS", "JavaScript"],
        link: "https://github.com/felipesokulskidev/frame-preview",
        emDesenvolvimento: true
    },
]

const cores = {
    React: { bg: "#dbeafe", texto: "#1d4ed8" },
    Python: { bg: "#fef3c7", texto: "#b45309" },
    CSS: { bg: "#ede9fe", texto: "#6d28d9" },
    MySQL: { bg: "#d1fae5", texto: "#047857" },
    TypeScript: { bg: "#dbeafe", texto: "#2563eb" },
    Supabase: { bg: "#d1fae5", texto: "#0f766e" },
    HTML: { bg: "#fed7aa", texto: "#c2410c" },
    JavaScript: { bg: "#fef9c3", texto: "#a16207" },
};

function Projetos(){
    return(
        <section className='projetos' id="projetos">
            <span className='projetos-title'>Projetos</span>
            <span className='projetos-subtitle'>Acompanhe alguns projetos que venho desenvolvendo no meu GitHub</span>
            
            <div className='projetos-layout'>
                {projetos.map((projeto) =>(
                    <div className='projetos-card' key={projeto.id}>
                        {projeto.emDesenvolvimento && (
                            <span className='projetos-status'>
                                Em desenvolvimento
                            </span>
                        )}
                        <div className='projetos-card-header'>
                            <div className='projetos-card-icon'>
                                <Star size={24} />
                            </div>
                            <div>
                                <h4 className='projetos-card-nome'>{projeto.nome}</h4>
                                <p className='projetos-card-desc'>{projeto.descricao}</p>
                            </div>
                        </div>
                        
                        <div className='projetos-card-stack'>
                            {projeto.tecnologias.map((tech) => (
                                <span 
                                    className='tech-tag' 
                                    key={tech}
                                    style={{
                                        backgroundColor: cores[tech]?.bg || "#e5e5e5",
                                        color: cores[tech]?.texto || "#404040"
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className='projetos-card-footer'>
                            <a className='projetos-card-link' href={projeto.link}>
                                Ver no GitHub <SquareArrowOutUpRight size={16} />
                            </a>
                        </div>
                    </div>
                ))}
                
            </div>
        </section>
    )
}

export default Projetos;