import './NavBar.css';
import { useEffect, useState } from 'react';
import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';

const KakashiSVG = require('../assets/kakashi.svg');
// const MenuSVG = require('../assets/menu.svg');



function NavBar() {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [color, setColor] = useState('');
    const [scrollPosition, setScrollPosition] = useState({});
    const [tabThemeArray, setTabThemeArray] = useState({
        home: {
            'color': 'lightgreen',
            'border': '1px solid #ffffff5c',
            'padding': '1px 4px'
        },
        projects: {},
        skills: {},
        about: {},
        contact: {}
    });

    window.onscroll = () => {
        setScrollPosition(document.documentElement.scrollTop || document.body.scrollTop);
        console.log(scrollPosition);
    };

    useEffect(() => {
        window.screen.width >= 600 ?
            setIsMobile(false) : setIsMobile(true);
        isMenuOpen ?
            setColor('rgb(21, 36, 36)') : setColor('');
    }, [isMenuOpen]);

    useEffect(() => {
        const tmpTheme = {
            'color': 'lightgreen',
        };

        if (scrollPosition < 557) {
            tabThemeArray.home = tmpTheme;
        } else {
            tabThemeArray.home = {};
        }

        if (scrollPosition > 1070 && scrollPosition < 1535) {
            tabThemeArray.projects = tmpTheme;
        } else {
            tabThemeArray.projects = {};
        }

        if (scrollPosition > 1535 && scrollPosition < 1800) {
            tabThemeArray.skills = tmpTheme;
        } else {
            tabThemeArray.skills = {};
        }

        if (scrollPosition > 1805) {
            tabThemeArray.about = tmpTheme;
        } else {
            tabThemeArray.about = {};
        }


    }, [scrollPosition]);

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
                        <li key='home'><a style={tabThemeArray.home} href="/" tabIndex={0} ><span>#</span>home</a></li>
                        <li key='projects'><a style={tabThemeArray.projects} href="/#projects" tabIndex={1}><span>#</span>projects</a></li>
                        <li key='skills'><a href="/#skills" style={tabThemeArray.skills} tabIndex={1}><span>#</span>skills</a></li>
                        <li key='about'><a href="/#about" style={tabThemeArray.about} tabIndex={2}><span>#</span>about-me</a></li>
                        <li key='contact'><a href="/#contact" style={tabThemeArray.contact} tabIndex={3}><span>#</span>contacts</a></li>
                    </ul>
                }
            </nav>
        </>
    );
}

export default NavBar;