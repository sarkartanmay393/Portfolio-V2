import "../styles/Menuboard.css";
import { useRouteMatch } from "react-router-dom";

// imported from react router website
const CustomLink = ({ label, to, activeOnlyWhenExact, tabIndex }) => {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <li>
            <a className={match ? 'activeTab' : ''} href={to} tabIndex={tabIndex} >
                <span>/</span>{label}
            </a>
        </li>
    );
}

const MenuBoardChild = () => {
    const GithubSVG = require('../assets/github.svg').default;
    const TwitterSVG = require('../assets/twitter.svg').default;
    const LinkedinSVG = require('../assets/linkedin.svg').default;
    const SVGWIDTH = 32;

    return (
        <div className="over-menu-board">
            <div className='menu-board'>
                <ul>
                    <CustomLink k={'ul-0'} activeOnlyWhenExact={true} to='/' label="home" tabIndex={0}></CustomLink>
                    <CustomLink k={'ul-1'} to='/projects' label="projects" tabIndex={1}></CustomLink>
                    <CustomLink k={'ul-2'} to='/about' label="about-me" tabIndex={2}></CustomLink>
                </ul>
                <div className="social-menuboard">
                    <a href='https://twitter.com/sarkartanmay393'><img width={SVGWIDTH + 1} src={TwitterSVG} alt='twitter-ref' /></a>
                    <a href='https://github.com/sarkartanmay393'><img width={SVGWIDTH} src={GithubSVG} alt='github-ref' /></a>
                    <a href='https://linkedin.com/in/tanmaysrkr'><img width={SVGWIDTH} src={LinkedinSVG} alt='linkedin-ref' /></a>
                </div>
            </div>
        </div>
    );
};

const NavBarItems = () => {
    return (
        <ul className="NavBarItems">
            <CustomLink k={'ul-0'} activeOnlyWhenExact={true} to='/' label="home" tabIndex={0}></CustomLink>
            <CustomLink k={'ul-1'} to='/projects' label="projects" tabIndex={1}></CustomLink>
            <CustomLink k={'ul-2'} to='/about' label="about-me" tabIndex={2}></CustomLink>
        </ul>
    );
}

export { CustomLink, MenuBoardChild, NavBarItems };