import '../styles/NavBar.css';
import Hamburger from "./Hamburger";
import { useEffect, useState } from 'react';
import { MenuBoardChild, NavBarItems } from "./Menuboard";

const KakashiSVG = require('../assets/kakashi.svg').default;

function NavBar() {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [color, setColor] = useState('');

    window.onload = () => {
        document.getElementById("kakashi-face-nav").animate([
            { transform: 'rotate(360deg)' },
        ], 1000)
    };

    useEffect(() => {
        window.screen.width >= 600 ?
            setIsMobile(false) : setIsMobile(true);
        isMenuOpen ?
            setColor('rgb(21, 36, 36)') : setColor('');
    }, [isMenuOpen]);

    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.getElementsByClassName('hamburger').item(0).classList.toggle("open");
    };

    // document.body.onclick = () => openMenu();

    return (
        <>
            {isMenuOpen ?
                <MenuBoardChild />
                : <></>
            }
            <section className='full-navbar'>
                <nav style={{ 'backgroundColor': `${color}` }} >
                    <a href='/'><h2><img id='kakashi-face-nav' src={KakashiSVG} alt='kakashi-face' />Tanmay</h2></a>
                    {isMobile ?
                        <Hamburger openMenu={openMenu} />
                        : <NavBarItems />
                    }
                </nav>
                <div className='progress-bar'></div>
            </section>
        </>
    );
}

export default NavBar;