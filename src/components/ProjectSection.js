import './ProjectSection.css';

function ProjectSection() {
    const viewAll = `View All~~>`;
    const projects = [{
        title: "Yatra Sahayak",
        madeby: "Go, Docker, Bootstrap, PostgreSQL",
        url: `https://github.com/sarkartanmay393/RoomReservation-Go`,
        image: `https://github.com/sarkartanmay393/RoomReservation-Go/raw/main/static/readme/logo.png`,
        description: `Check room availability in desired dates, 
            make reservation and get your reservation summary in 
            Email. Technically a Golang based Web Application with 
            Database Interaction`,
    },
    {
        title: "Blogosphere",
        madeby: "ReactJS, MongoDB, Express and Node",
        url: `https://github.com/sarkartanmay393/Blogosphere-JS`,
        image: `https://github.com/sarkartanmay393/Blog-Platform-Web3/raw/master/public/blogosphere-logo.png`,
        description: `Contains Javascript code of a blogging website 
            using ReactJS, MongoDB, Express and Node`,

    },
    {
        title: "Blogosphere",
        madeby: "ReactJS, MongoDB, Express and Node",
        url: `https://github.com/sarkartanmay393/Blogosphere-JS`,
        image: `https://github.com/sarkartanmay393/Blog-Platform-Web3/raw/master/public/blogosphere-logo.png`,
        description: `Contains Javascript code of a blogging website 
            using ReactJS, MongoDB, Express and Node`,

    }];

    return (
        <section id='project-section'>
            <header>
                <h2><span>#</span>Projects</h2><hr />
                <button onClick={() => { alert("View All!"); }}>{viewAll}</button>
            </header>
            <main>
                {
                    projects.map((value, index) => {
                        return (
                            <section className='project-card'>
                                <p>{value.madeby}</p>
                                <div className='row'>
                                    <img src={value.image} alt={`${value.title}-${index}`} />
                                    <h3>{value.title}</h3>
                                </div>
                                <p>{value.description}</p>
                                <div className='row'>
                                    <button>Live</button>
                                    <button>Repo</button>
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