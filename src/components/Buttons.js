import "../styles/Buttons.css";


const DemoButton = ({ url }) => {
    return (
        <a className="project-cards-btn" href={url}><button>DEMO</button></a>
    );
}

const CodeButton = ({ url }) => {
    return (
        <a className="project-cards-btn" href={url}><button>CODE</button></a>
    );
}

export {
    DemoButton,
    CodeButton
};