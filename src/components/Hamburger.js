import '../styles/Hamburger.css';


const Hamburger = ({ openMenu }) => {
    return (
        <div className='hamburger' onClick={openMenu}>
            <span className='hamburger-topbun'></span>
            <span className='hamburger-bottombun'></span>
        </div>
    );
}

export default Hamburger;