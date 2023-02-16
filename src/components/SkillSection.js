import { useEffect, useState } from 'react';
import '../styles/SkillSection.css';

function SkillSection({ languages, frameworks, tools, cloud, others, databases }) {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        setSkills([
            languages,
            frameworks,
            cloud,
            others,
            databases,
            tools,
        ]);
    }, [languages, frameworks, cloud, others, databases, tools]);

    return (
        <section id='skills'>
            <header>
                <h2><span id='hash'>#</span>skills</h2>
            </header>
            <main>
                {/* <section id='skills-quote'></section> */}
                {/* <section id='skills'> */}
                {
                    skills.map((valueArray, indexArray) => {
                        // Small lengths to Long Lengths
                        valueArray.sort((a, b) => {
                            if (a.length > b.length) {
                                return 1;
                            } else if (a.length === b.length) {
                                return 0;
                            }
                            return -1;
                        });

                        return (
                            <section className='skill-card' key={`${indexArray}-skills`}>
                                <p id='skill-header'>{swForHeader(indexArray)}</p>
                                <p id='skill-names'>{
                                    valueArray.map((value, index) => {
                                        return (
                                            <a key={`${index}-skillNames`} onClick={(e) => {
                                                e.preventDefault();
                                                if (window.confirm(`Visit ${swForLinks(value)}`)) {
                                                    window.open(swForLinks(value), "_blank");
                                                }
                                            }} href={swForLinks(value)}>
                                                <img alt={`skill-in-${value}`} src={`https://img.shields.io/badge/
                                                    ${value}-white?style=for-the-badge&logo=${value}&logoColor=black`
                                                } />
                                            </a>
                                        );
                                    })
                                }</p>
                            </section>
                        );
                    })
                }
                {/* </section> */}
            </main>
        </section>
    );

}

const swForHeader = (index) => {
    let res = "";
    switch (index) {
        case 0:
            res = "Languages";
            break;
        case 1:
            res = "Frameworks";
            break;
        case 2:
            res = "Cloud";
            break;
        case 3:
            res = "Others";
            break;
        case 4:
            res = "Databases";
            break;
        case 5:
            res = "Tools";
            break;
        default:
            return;
    }
    return res;
}
const swForLinks = (skillName) => {
    let res = "";

    switch (skillName) {
        default:
            return;
        case "Linode":
            res = "https://linode.com/";
            break;
        case "Dart":
            res = "https://dart.dev/";
            break;
        case "React":
            res = "https://reactjs.org/";
            break;
        case "Go":
            res = "https://go.dev/";
            break;
        case "JavaScript":
            res = "https://www.javascript.com/";
            break;
        case "Bash":
            res = "https://tldp.org/LDP/Bash-Beginners-Guide/html/";
            break;
        case "SQL":
            res = "https://www.w3schools.com/sql/";
            break;
        case "Java":
            res = "https://www.java.com/en/";
            break;
        case "Express":
            res = "https://expressjs.com/";
            break;
        case "Flutter":
            res = "https://flutter.dev/";
            break;
        case "MySQL":
            res = "https://www.mysql.com/";
            break;
        case "PostgreSQL":
            res = "https://www.postgresql.org/";
            break;
        case "MongoDB":
            res = "https://www.mongodb.com/try/download/community";
            break;
        case "Redis":
            res = "https://redis.io/";
            break;
        case "Docker":
            res = "https://www.docker.com/";
            break;
        case "Kubernetes":
            res = "https://kubernetes.io/";
            break;
        case "Terraform":
            res = "https://www.terraform.io/";
            break;
        case "Jenkins":
            res = "https://www.jenkins.io/";
            break;
        case "Git":
            res = "https://git-scm.com/";
            break;
        case "Azure":
            res = "https://portal.azure.com/#home";
            break;
        case "Civo":
            res = "https://www.civo.com/";
            break;
        case "Linux":
            res = "https://www.linux.org/";
            break;
        case "Firebase":
            res = "https://firebase.google.com/";
            break;
    }

    return res;
}

export default SkillSection;