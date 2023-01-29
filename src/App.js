import './App.css';
import NavBar from './components/NavBar';
// import FollowLine from './components/FollowLine';
import IntroCard from './components/IntroCard';
import QuoteCard from './components/QuoteCard';
import ProjectSection from './components/ProjectSection';
import FooterCard from './components/FooterCard';
import SkillSection from './components/SkillSection';
import AboutSection from './components/AboutMe';
import ContactSection from './components/ContactCard';
import ScrollToTop from './components/ScrollToTop';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';




function App({ db }) {
  const [websiteData, setWebsiteData] = useState({
    "email": "hello@tanmaysarkar.tech",
    "intro_desc": "DevOps with Go | Full Stack with JS | Articles on  @hashnode  | Bow to Hari Narayan | CGEC 24",
    "ps": {
      "ref": "https://github.com/sarkartanmay393/Portfolio-V2",
      "status": "Portfolio"
    },
    "quote": {
      "author": `Albert Einstein`,
      "text": `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
    },
    "about_me": {
      "intro": `Hello, i’m Elias!`,
      "p1": `I’m a self-taught front-end developer
      based in Kyiv, Ukraine. I can develop responsive websites
      from scratch and raise them into modern user-friendly web
      experiences.`,
      "p2": `Transforming my creativity and knowledge into
      a websites has been my passion for over a year. I have been
      helping various clients to establish their presence online. I
      always strive to learn about the newest technologies and
      frameworks.`,
      "p3": `Transforming my creativity and knowledge into
      a websites has been my passion for over a year. I have been
      helping various clients to establish their presence online. I
      always strive to learn about the newest technologies and
      frameworks.`,
    },
    "skills": {
      "tools": [
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Terraform",
        "Git"
      ],
      "cloud": [
        "Linode",
        "Civo",
        "Firebase"
      ],
      "frameworks": [
        "React",
        "Express",
        "Flutter"
      ],
      "databases": [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Redis"
      ],
      "languages": [
        "JavaScript",
        "Go",
        "Java",
        "Dart",
        "Python"
      ],
      "others": [
        "HTML",
        "CSS",
        "Linux"
      ]
    },
    "projects": [
      {
        "title": "Yatra Sahayak",
        "madeby": "Go, Docker, Bootstrap, PostgreSQL",
        "demo": "http://192.46.213.243/",
        "image": "https://github.com/sarkartanmay393/RoomReservation-Go/raw/main/static/readme/logo.png",
        "url": "https://github.com/sarkartanmay393/RoomReservation-Go",
        "description": "Check room availability in desired dates,              make reservation and get your reservation summary in              Email. Technically a Golang based Web Application with              Database Interaction"
      },
      {
        "url": "https://github.com/sarkartanmay393/Blogosphere-JS",
        "description": "Contains Javascript code of a blogging website              using ReactJS, MongoDB, Express and Node",
        "image": "https://github.com/sarkartanmay393/Blog-Platform-Web3/raw/master/public/blogosphere-logo.png",
        "demo": "http://192.46.213.243:8081",
        "title": "Blogosphere",
        "madeby": "ReactJS, MongoDB, Express, Node"
      },
      {
        "image": "https://img.icons8.com/clouds/100/null/landslide.png",
        "demo": "https://gazeweather.web.app/",
        "madeby": "ReactJS, HTML, CSS, RestAPI",
        "description": "Contains Javascript code of a blogging website              using ReactJS, HTML, CSS",
        "title": "Gaze Weather",
        "url": "https://github.com/sarkartanmay393/Gaze-Weather-JS"
      },
      {
        "url": "https://github.com/sarkartanmay393/URL-Shortener-Go",
        "title": "URL Shortener",
        "description": "This is a simple URL shortener service that          uses Redis as a database. It is built using Golang and Docker.           It is also deployed on somewhere.",
        "image": "https://img.icons8.com/clouds/100/null/domain.png",
        "demo": "https://github.com/sarkartanmay393/URL-Shortener-Go#test-screenshots-",
        "madeby": "Golang, Redis, Docker, Compose"
      },
    ]
  });


  useEffect(() => {
    const syncWebsiteData = async (db) => {
      const snapshot = await getDocs(collection(db, 'body-info'));
      const data = snapshot.docs[0];

      setWebsiteData({
        email: data.get('email'),
        intro_desc: data.get('intro-description'),
        ps: {
          ref: data.get('ps-ref'),
          status: data.get('ps-status'),
        },
        quote: {
          author: data.get('quote-author'),
          text: data.get('quote-text'),
        },
        about_me: data.get('about-me'),
        skills: data.get('skills'),
        projects: data.get('projects'),
      });
    }

    syncWebsiteData(db);
    // console.log(websiteData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* <FollowLine /> */}
      <header>
        <div className='invisible-space'></div>
        <NavBar />
      </header>
      <main id='home'>
        <div className='invisible-space-m'></div>
        <section className='main-components'>
          <IntroCard ps_ref={websiteData.ps.ref} ps_status={websiteData.ps.status} description={websiteData.intro_desc} />
          <QuoteCard quote={websiteData.quote.text} author={websiteData.quote.author} />
          <ProjectSection projects={websiteData.projects} />
          <SkillSection Skills={websiteData.skills} />
          <AboutSection {...websiteData.about_me} />
          <ContactSection />
        </section>
      </main>
      <footer>
        <div className='invisible-space-m'></div>
        <FooterCard />
      </footer>
      <p id='copyright-tag'>© Copyright 2023. Redesigned by Tanmay</p>
      <ScrollToTop />
    </>
  );
}

export default App;
