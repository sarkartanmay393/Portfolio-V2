import { useEffect } from 'react';
import './ProjectsPage.css';

function ProjectsPage({ weeksOfWork, daysOfWork }) {

    const wowSection = (weeksOfWork) => {
        return (
            <>
                <h3 id='wow-heading-text'>#weeks-of-works</h3>
                <section id='weeks-of-works'>
                    {weeksOfWork.map((value, index) => {
                        return (
                            <section className='project-card' key={`${value}-${index}`}>
                                <p id='madeby'>{value.madeby.slice(0, 31)}</p>
                                <div className='row'>
                                    <img src={value.image} alt={`${value.title}-${index}`} />
                                    <h3>{value.title}</h3>
                                </div>
                                <p id='desc'>{value.description.slice(0, 120).trim().concat('...')}</p>
                                <div className='btns'>
                                    <a href={value.demo}><button>Demo</button></a>
                                    <a href={value.url}><button>Repo</button></a>
                                </div>
                            </section>
                        );
                    })}
                </section>
            </>
        );
    }
    const dowSection = (daysOfWork) => {
        return (
            <>
                <h3 id='dow-heading-text'>#days-of-works</h3>
                <section id='days-of-works'>
                    {daysOfWork.map((value, index) => {
                        return (
                            <section className='dow-project-card' key={`${value}-${index}`}>
                                <p id='madeby'>{value.madeby.slice(0, 31)}</p>
                                <div id='title-desc'>
                                    <h3>{value.title}</h3>
                                    <p id='desc'>{value.description.slice(0, 100).trim().concat('...')}</p>
                                </div>
                                <div className='btns'>
                                    {value.demo ? <a href={value.demo}><button>Demo</button></a> : <></>}
                                    <a href={value.url}><button>Repo</button></a>
                                </div>
                            </section>
                        );
                    })}
                </section>
            </>
        );
    }

    useEffect(() => {
        window.document.documentElement.scrollTop = 0;
    }, []);

    return (
        <section className='projects-page'>
            <header>
                <h1 id='page-header-text'><span id='page-slash-text'>/</span>projects</h1>
                <p id='projects-header-desc'>List of my projects</p>
            </header>
            <main>
                {wowSection(weeksOfWork)}
                {dowSection(daysOfWork)}
            </main>
        </section>
    );
}

export default ProjectsPage;