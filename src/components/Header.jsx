import { Home, CodeXml, User, FileText, Mail} from 'lucide-react';
import './Header.css'; 
import Logo from '../assets/logo-website.png'

function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={Logo} className="logo-img" alt="Logo" />
                <span className="logo-text">Felipe</span>
            </div>
            
            <nav className="nav-menu">
                <a href="#inicio" className="nav-item">
                    <Home size={18} />
                    <span className="nav-label">Início</span>
                </a>
                <a href="#sobre" className="nav-item">
                    <User size={18} />
                    <span className="nav-label">Sobre</span>
                </a>
                <a href="#projetos" className="nav-item">
                    <CodeXml size={18}/>
                    <span className="nav-label">Projetos</span>
                </a>
                <a href="#inicio" className="nav-item">
                    <FileText size={18}/>
                    <span className="nav-label">Currículo</span>
                </a>
                <a href="#contato" className="nav-item">
                    <Mail size={18}/>
                    <span className="nav-label">Contato</span>
                </a>
                
            </nav>
        </header>
    );
}

export default Header