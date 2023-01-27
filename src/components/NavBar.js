import './NavBar.css';

const KakashiSVG = require('../assets/kakashi.svg').default;

function NavBar() {
    return (
        <nav>
            <h2 href='#home'><img src={KakashiSVG} alt='kakashi-face' />Tanmay</h2>
            <ul>
                <li><a href="#home" tabIndex={0}><span>#</span>home</a></li>
                <li><a href="#projects" tabIndex={1}><span>#</span>projects</a></li>
                <li><a href="#skills" tabIndex={1}><span>#</span>skills</a></li>
                <li><a href="#about" tabIndex={2}><span>#</span>about-me</a></li>
                <li><a href="#contact" tabIndex={3}><span>#</span>contact</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;