import React from 'react';
import { Home, CodeXml, User, FileText, Mail, Code } from 'lucide-react';
import './Header.css'; 

function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src="src/assets/logo-website.png" className="logo-img" alt="Logo" />
                <span className="logo-text">Felipe</span>
            </div>
            
            <nav className="nav-menu">
                <Home size={18}/>
                <CodeXml size={18}/>
                <User size={18} />
                <FileText size={18}/>
                <Mail size={18}/>
                <Code size={18}/>
            </nav>
        </header>
    );
}

export default Header;