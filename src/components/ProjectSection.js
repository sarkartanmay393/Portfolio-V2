import './ProjectSection.css';

function ProjectSection({projects}) {
    const viewAll = `View All ⇢`;

    return (
        <section id='projects'>
            <header>
                <h2><span>#</span>projects</h2>
                <button id='view-all-btn' onClick={() => { alert("View All!"); }}>{viewAll}</button>
            </header>
            <main>
                {
                    projects.map((value, index) => {
                        if (index >= 4) {
                            return <></>;
                        }
                        return (
                            <section className='project-card' key={`${value}-${index}`}>
                                <p id='madeby'>{value.madeby}</p>
                                <div className='row'>
                                    <img src={value.image} alt={`${value.title}-${index}`} />
                                    <h3>{value.title}</h3>
                                </div>
                                <p id='desc'>{value.description}</p>
                                <div className='btns'>
                                    <a href={value.demo}><button>Live</button></a>
                                    <a href={value.url}><button>Repo</button></a>
                                </div>
                            </section>
                        );
                    })
                }
            </main>
        </section>
    );

}

export default ProjectSection;