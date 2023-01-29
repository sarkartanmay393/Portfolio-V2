import './ProjectSection.css';

function ProjectSection() {
    const viewAll = `View All ⇢`;
    const projects = [{
        title: "Yatra Sahayak",
        madeby: "Go, Docker, Bootstrap, PostgreSQL",
        url: `https://github.com/sarkartanmay393/RoomReservation-Go`,
        image: `https://github.com/sarkartanmay393/RoomReservation-Go/raw/main/static/readme/logo.png`,
        demo: '',
        description: `Check room availability in desired dates, 
            make reservation and get your reservation summary in 
            Email. Technically a Golang based Web Application with 
            Database Interaction`,
    },
    {
        title: "URL Shortener",
        madeby: "Golang, Redis, Docker, Compose",
        url: `https://github.com/sarkartanmay393/URL-Shortener-Go`,
        image: `https://img.icons8.com/clouds/100/null/domain.png`,
        demo: '',

        description: `This is a simple URL shortener service that
         uses Redis as a database. It is built using Golang and Docker.
          It is also deployed on somewhere.`,
    },
    {
        title: "Blogosphere",
        madeby: "ReactJS, MongoDB, Express, Node",
        url: `https://github.com/sarkartanmay393/Blogosphere-JS`,
        image: `https://github.com/sarkartanmay393/Blog-Platform-Web3/raw/master/public/blogosphere-logo.png`,
        demo: '',
        description: `Contains Javascript code of a blogging website 
            using ReactJS, MongoDB, Express and Node`,
    }
    ];

    return (
        <section id='projects'>
            <header>
                <h2><span>#</span>Projects</h2>
                <button id='view-all-btn' onClick={() => { alert("View All!"); }}>{viewAll}</button>
            </header>
            <main>
                {
                    projects.map((value, index) => {
                        if (index >= 3) {
                            return <></>;
                        }
                        return (
                            <section className='project-card'>
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