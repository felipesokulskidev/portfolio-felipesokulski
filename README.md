# Portfólio — Felipe Krupa Sokulski

Site pessoal para apresentar minha trajetória, formação e projetos como estudante de Ciência da Computação. Construído com React e Vite, com foco em performance, responsividade e um design limpo.

**Deploy:** [felipesokulski.vercel.app](https://felipesokulski.vercel.app)

## Sobre

Estudante de Ciência da Computação (4º período) na Pontifícia Universidade Católica do Paraná (PUCPR), com interesse em Desenvolvimento Web, Cloud e Banco de Dados. O portfólio reúne uma apresentação pessoal, formação acadêmica, principais ferramentas de trabalho, projetos em destaque e canais de contato — pensado tanto para recrutadores quanto para outros desenvolvedores que queiram conhecer o trabalho.

## Seções

| Seção | Descrição |
|---|---|
| **Início** (`Hero`) | Apresentação, localização, frase de efeito, botões de contato por e-mail e download de currículo, e links para redes sociais. |
| **Sobre** (`Sobre`) | Texto sobre perfil profissional, formação acadêmica (PUCPR e Colégio da Polícia Militar do Paraná) e stack de ferramentas. |
| **Projetos** (`Projetos`) | Cards com os principais projetos, tecnologias utilizadas e link para o repositório no GitHub. |
| **Contato** (`Contato`) | Chamada para oportunidades e parcerias, com atalhos para e-mail, LinkedIn e GitHub. |

## Tecnologias

O projeto foi construído com:

- **[React 19](https://react.dev/)** — biblioteca para construção da interface
- **[Vite](https://vitejs.dev/)** — build tool e servidor de desenvolvimento
- **[Tailwind CSS](https://tailwindcss.com/)** — estilização utilitária
- **[Lucide React](https://lucide.dev/)** — ícones
- **[Devicon](https://devicon.dev/)** — ícones das tecnologias exibidas na seção "Ferramentas"
- **ESLint** — padronização e qualidade do código

Ferramentas e linguagens com as quais tenho experiência (exibidas na seção "Sobre"): Git, GitHub, Python, Java, HTML, CSS, React, JavaScript, TypeScript, MySQL e Supabase.

## Projetos em destaque

- **[Sistema de Triagem - SXF](https://github.com/joaopdiasdev/IBK_Grupo_6)** — Sistema web de triagem clínica para a Síndrome do X Frágil, em parceria com o Instituto Buko Kaesemodel. Frontend em React, com checklist interativo, cálculo de score de risco e geração de relatórios em PDF.
- **[Guess The Flag](https://github.com/felipesokulskidev/guess-the-flag)** *(em desenvolvimento)* — Quiz de bandeiras com dois modos de jogo e filtro por continente, feito em React + TypeScript com Context API.
- **[Spotify UI Clone](https://github.com/felipesokulskidev/spotify)** — Clone visual da interface do Spotify em HTML, CSS e JavaScript puro.
- **[Simulador de Molduras](https://github.com/felipesokulskidev/frame-preview)** *(em desenvolvimento)* — Protótipo em React + Vite + Tailwind para visualização de molduras personalizadas em tempo real.

## Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) instalado (recomendado 18+).

```bash
# Clone o repositório
git clone https://github.com/felipesokulskidev/portfolio-felipesokulski.git
cd portfolio-felipesokulski

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto ficará disponível em `http://localhost:5173`.

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento (Vite) |
| `npm run build` | Gera a build de produção |
| `npm run preview` | Serve a build de produção localmente |
| `npm run lint` | Executa o ESLint no projeto |

## Estrutura do projeto

```
portfolio-felipesokulski/
├── public/
├── src/
│   ├── assets/          # Imagens e logos
│   ├── components/
│   │   ├── Header.jsx   # Navegação
│   │   ├── Hero.jsx     # Seção inicial
│   │   ├── Sobre.jsx    # Sobre mim e formação
│   │   ├── Projetos.jsx # Cards de projetos
│   │   └── Contato.jsx  # Seção de contato
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Contato

- **E-mail:** [felipe.ksokulski@gmail.com](mailto:felipe.ksokulski@gmail.com)
- **LinkedIn:** [linkedin.com/in/felipekrupasokulski](http://linkedin.com/in/felipekrupasokulski)
- **GitHub:** [github.com/felipesokulskidev](https://github.com/felipesokulskidev/)
- **Instagram:** [instagram.com/felipe.ksokulski](https://instagram.com/felipe.ksokulski/)

Aberto a novas oportunidades, projetos e parcerias — buscando um estágio na área de tecnologia.
