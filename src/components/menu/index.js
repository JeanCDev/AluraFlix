import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/aluraflix.png';
import './menu.css';
import Button from './components/Button';

function Menu() {
  return (
    <header>
      <nav className="Menu">
        <a href="/">
          <img src={Logo} className="Logo" alt="Logo Aluraflix" />
        </a>

        <Button as={Link} to="/cadastro/video">
          Novo Vídeo
        </Button>
      </nav>
    </header>
  );
}

export default Menu;
