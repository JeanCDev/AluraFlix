import React from 'react';
import Logo from '../../assets/img/aluraflix.png';
import './menu.css';
import Button from './components/Button'

function Menu(){
    return (
        <header>
            <nav className='Menu'>
                <a href='/'>
                    <img src={Logo} className="Logo" alt="Logo Aluraflix"/>
                </a>

                <Button as='a' href="/">
                    Novo Vídeo
                </Button>
            </nav>
        </header>
    );
}

export default Menu; 