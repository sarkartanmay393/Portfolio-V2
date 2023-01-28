import { useEffect, useState } from 'react';
import './NavBar.css';

const KakashiSVG = require('../assets/kakashi.svg').default;
// const MenuSVG = require('../assets/menu.svg').default;



function NavBar() {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [color, setColor] = useState('');

    useEffect(() => {
        console.log(window.screen.width);
        window.screen.width >= 600 ?
            setIsMobile(false) : setIsMobile(true);
        console.log(isMobile);
        isMenuOpen ?
            setColor('rgb(21, 36, 36)') : setColor('');

    }, [isMobile, isMenuOpen]);

    const openMenu = () => { setIsMenuOpen(!isMenuOpen) };


    return (
        <>
            {isMenuOpen ?
                <div className='menu-board'>
                    <ul>
                        <li tabIndex={0}><a href='#projects'>#projects</a></li>
                        <li tabIndex={1}><a href='#skills'>#skills</a></li>
                        <li tabIndex={2}><a href='#about'>#about-me</a></li>
                        <li tabIndex={3}><a href='#contact'>#contacts</a></li>
                    </ul>
                </div> :
                <></>
            }
            <nav style={{ 'background-color': `${color}` }} >
                <h2 href='#home'><img id='kakashi-face-nav' src={KakashiSVG} alt='kakashi-face' />Tanmay</h2>
                {isMobile ?
                    <>
                        <p id='menu-btn' onClick={openMenu}>{isMenuOpen ? '❎' : '='}</p>
                    </>
                    :
                    <ul>
                        <li><a href="#home" tabIndex={0}><span>#</span>home</a></li>
                        <li><a href="#projects" tabIndex={1}><span>#</span>projects</a></li>
                        <li><a href="#skills" tabIndex={1}><span>#</span>skills</a></li>
                        <li><a href="#about" tabIndex={2}><span>#</span>about-me</a></li>
                        <li><a href="#contact" tabIndex={3}><span>#</span>contact</a></li>
                    </ul>
                }
            </nav>
        </>
    );
}

export default NavBar;