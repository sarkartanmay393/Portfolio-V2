import './NavBar.css';
import { useEffect, useState } from 'react';
import { useRouteMatch } from "react-router-dom";

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

    // imported from react router website
    const CustomLink = ({ label, to, activeOnlyWhenExact, tabIndex }) => {
        let match = useRouteMatch({
            path: to,
            exact: activeOnlyWhenExact
        });

        return (
            <li key='home'>
                <a className={match ? "activeTab" : ""} href={to} tabIndex={tabIndex} >
                    /
                    {label}
                </a>
            </li>
        );
    }

    return (
        <>
            {isMenuOpen ?
                <div className='menu-board'>
                    <ul>
                        <CustomLink activeOnlyWhenExact={true} to='/' label="home" tabIndex={0}></CustomLink>
                        <CustomLink to='/projects' label="projects" tabIndex={1}></CustomLink>
                        <CustomLink to='/about' label="about-me" tabIndex={2}></CustomLink>
                    </ul>
                </div> :
                <></>
            }
            <section className='full-navbar'>
                <nav style={{ 'backgroundColor': `${color}` }} >
                    <a href='/'><h2><img id='kakashi-face-nav' src={KakashiSVG} alt='kakashi-face' />Tanmay</h2></a>
                    {isMobile ?
                        <>
                            <div className='hamburger' onClick={openMenu}>
                                <span className='hamburger-topbun'></span>
                                <span className='hamburger-bottombun'></span>
                            </div>
                            {/* <p id='menu-btn' onClick={openMenu}>{isMenuOpen ? '❎' : '='}</p> */}
                        </>
                        :
                        <ul>
                            <CustomLink activeOnlyWhenExact={true} to='/' label="home" tabIndex={0}></CustomLink>
                            <CustomLink to='/projects' label="projects" tabIndex={1}></CustomLink>
                            <CustomLink to='/about' label="about-me" tabIndex={2}></CustomLink>
                        </ul>
                    }
                </nav>
                <div className='progress-bar'></div>
            </section>
        </>
    );
}

export default NavBar;