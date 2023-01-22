import './NavBar.css';

const KakashiSVG = require('../assets/kakashi.svg').default;

export default function NavBar() {
    return (
        <nav>
            <h2 href='#home'><img src={KakashiSVG} alt='kakashi-face' />Tanmay</h2>
            <ul>
                <li><a href="#home" tabIndex={0}><span>#</span>home</a></li>
                <li><a href="#home" tabIndex={1}><span>#</span>work</a></li>
                <li><a href="#home" tabIndex={2}><span>#</span>about-me</a></li>
                <li><a href="#home" tabIndex={3}><span>#</span>contact</a></li>
            </ul>
        </nav>
    );
}