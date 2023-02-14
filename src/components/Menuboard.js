import "../styles/Menuboard.css";
// import ReactDOM from 'react-dom';
import { useRouteMatch } from "react-router-dom";
import ClickAwayListener from 'react-click-away-listener';



// imported from react router website
const CustomLink = ({ k, label, to, activeOnlyWhenExact, tabIndex }) => {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <li>
            <a className={match ? 'activeTab' : ''} href={to} tabIndex={tabIndex} >
                /{label}
            </a>
        </li>
    );
}

const MenuBoardChild = ({ isOpen }) => {
    return (
        <ClickAwayListener onClickAway={() => { }}>
            <div className="over-menu-board">
                <div className='menu-board'>
                    <ul>
                        <CustomLink k={'ul-0'} activeOnlyWhenExact={true} to='/' label="home" tabIndex={0}></CustomLink>
                        <CustomLink k={'ul-1'} to='/projects' label="projects" tabIndex={1}></CustomLink>
                        <CustomLink k={'ul-2'} to='/about' label="about-me" tabIndex={2}></CustomLink>
                    </ul>
                </div>
            </div>
        </ClickAwayListener>
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

// const MenuBoard = ({ child = MenuBoardChild }) => {
//     return ReactDOM.createPortal(
//         child,
//         document.getElementById('menuboard')
//     );
// }

export { CustomLink, MenuBoardChild, NavBarItems };