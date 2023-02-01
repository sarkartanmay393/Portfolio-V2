import './NavBar.css';
import { useEffect, useState } from 'react';

const KakashiSVG = require('../assets/kakashi.svg').default;
// const MenuSVG = require('../assets/menu.svg').default;



function NavBar() {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [color, setColor] = useState('');

    useEffect(() => {
        window.screen.width >= 600 ?
            setIsMobile(false) : setIsMobile(true);
        isMenuOpen ?
            setColor('rgb(21, 36, 36)') : setColor('');
    }, [isMenuOpen]);

    const openMenu = () => { setIsMenuOpen(!isMenuOpen) };

    return (
        <>
            {isMenuOpen ?
                <div className='menu-board'>
                    <ul>
                        <li tabIndex={0}><a href='/#projects'>#projects</a></li>
                        <li tabIndex={1}><a href='/#skills'>#skills</a></li>
                        <li tabIndex={2}><a href='/#about'>#about-me</a></li>
                        <li tabIndex={3}><a href='/#contact'>#contacts</a></li>
                    </ul>
                </div> :
                <></>
            }
            <nav style={{ 'backgroundColor': `${color}` }} >
                <a href='/'><h2><img id='kakashi-face-nav' src={KakashiSVG} alt='kakashi-face' />Tanmay</h2></a>
                {isMobile ?
                    <>
                        <p id='menu-btn' onClick={openMenu}>{isMenuOpen ? '❎' : '='}</p>
                    </>
                    :
                    <ul>
                        <li key='home'><a href="/" tabIndex={0}><span>#</span>home</a></li>
                        <li key='projects'><a href="/#projects" tabIndex={1}><span>#</span>projects</a></li>
                        <li key='skills'><a href="/#skills" tabIndex={1}><span>#</span>skills</a></li>
                        <li key='about'><a href="/#about" tabIndex={2}><span>#</span>about-me</a></li>
                        <li key='contact'><a href="/#contact" tabIndex={3}><span>#</span>contacts</a></li>
                    </ul>
                }
            </nav>
        </>
    );
}

export default NavBar;