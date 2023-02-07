import './NavBar.css';
import { useEffect, useState } from 'react';
import {
    useRouteMatch
} from "react-router-dom";

const KakashiSVG = require('../assets/kakashi.svg').default;
// const MenuSVG = require('../assets/menu.svg');



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

    // imported from react router website
    const CustomLink = ({ label, to, activeOnlyWhenExact, tabIndex }) => {
        let match = useRouteMatch({
            path: to,
            exact: activeOnlyWhenExact
        });

        return (
            <li key='home'>
                <a className={match ? "activeTab" : ""} href={to} tabIndex={tabIndex} >
                    <span>/</span>
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
            <nav style={{ 'backgroundColor': `${color}` }} >
                <a href='/'><h2><img id='kakashi-face-nav' src={KakashiSVG} alt='kakashi-face' />Tanmay</h2></a>
                {isMobile ?
                    <>
                        <p id='menu-btn' onClick={openMenu}>{isMenuOpen ? '❎' : '='}</p>
                    </>
                    :
                    <ul>
                        <CustomLink activeOnlyWhenExact={true} to='/' label="home" tabIndex={0}></CustomLink>
                        <CustomLink to='/projects' label="projects" tabIndex={1}></CustomLink>
                        <CustomLink to='/about' label="about-me" tabIndex={2}></CustomLink>
                    </ul>
                }
            </nav>
        </>
    );
}

export default NavBar;