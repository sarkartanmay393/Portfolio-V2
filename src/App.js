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
    "intro_terms": {
      "first": "Full Stack Developer",
      "second": "DevOps Enthusiast",
    },
    "intro_desc": `
      Welcome to my tech portfolio, here I showcase my skills, experiences,
      and projects in the field of technology. I am a dedicated full stack 
      developer and a DevOps Enthusiast, with a passion for developing innovative solutions and 
      solving complex problems.`,
    "ps": {
      "ref": "https://github.com/sarkartanmay393/Portfolio-V2",
      "status": "Portfolio"
    },
    "quote": {
      "author": `Albert Einstein`,
      "text": `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
    },
    "contacts": {
      "twitter": `sarkartanmay393`,
      "github": `sarkartanmay393`,
      "linkedin": "tanmaysrkr",
    },
    "about_me": {
      "intro": `Hello, I’m Tanmay!`,
      "p1": `I’m a self-taught full stack developer based in Dhupguri, India. 
        I can develop responsive websites from scratch and raise them into 
        modern user-friendly web experiences`,
      "p2": `Transforming my thoughts and knowledge into websites has been
        my passion for over a year. And I always believe in quality rather 
        than quantity. I always strive to learn about the newest technologies 
        and frameworks`,
      "p3": `Other than web development, I really am intrigued about the operations 
        part of app lifecycle. In modern terms, DevOps is my goal and web dev is part 
        of it.`,
    },
    "footer_desc": `Full Stack with JavaScript and DevOps with Go, is my life in this vast tech industry.`,
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
        "description": "Check room availability in desired dates, make reservation and get your reservation summary in Email. Technically a Golang based Web Application with Database Interaction"
      },
      {
        "url": "https://github.com/sarkartanmay393/Blogosphere-JS",
        "description": "Contains Javascript code of a blogging website using ReactJS, MongoDB, Express and Node",
        "image": "https://github.com/sarkartanmay393/Blog-Platform-Web3/raw/master/public/blogosphere-logo.png",
        "demo": "http://192.46.213.243:8081",
        "title": "Blogosphere",
        "madeby": "ReactJS, MongoDB, Express, Node"
      },
      {
        "image": "https://img.icons8.com/clouds/100/null/landslide.png",
        "demo": "https://gazeweather.web.app/",
        "madeby": "ReactJS, HTML, CSS, RestAPI",
        "description": "Contains Javascript code of a blogging website using ReactJS, HTML, CSS",
        "title": "Gaze Weather",
        "url": "https://github.com/sarkartanmay393/Gaze-Weather-JS"
      },
      {
        "url": "https://github.com/sarkartanmay393/URL-Shortener-Go",
        "title": "URL Shortener",
        "description": "This is a simple URL shortener service that uses Redis as a database. It is built using Golang and Docker. It is also deployed on somewhere.",
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
        intro_terms: {
          first: data.get('intro-terms')[0],
          second: data.get('intro-terms')[1],
        },
        footer_desc: data.get('footer-description'),
        intro_desc: data.get('intro-description'),
        ps: {
          ref: data.get('ps-ref'),
          status: data.get('ps-status'),
        },
        quote: {
          author: data.get('quote-author'),
          text: data.get('quote-text'),
        },
        contacts: data.get('contacts'),
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
          <IntroCard term_first={websiteData.intro_terms.first} term_second={websiteData.intro_terms.second} ps_ref={websiteData.ps.ref} ps_status={websiteData.ps.status} description={websiteData.intro_desc} />
          <QuoteCard quote={websiteData.quote.text} author={websiteData.quote.author} />
          <ProjectSection projects={websiteData.projects} />
          <SkillSection Skills={websiteData.skills} />
          <AboutSection {...websiteData.about_me} />
          <ContactSection contacts={websiteData.contacts} email={websiteData.email} />
        </section>
      </main>
      <footer>
        <div className='invisible-space-m'></div>
        <FooterCard desc={websiteData.footer_desc} contacts={websiteData.contacts} email={websiteData.email} />
      </footer>
      <p id='copyright-tag'>© Copyright 2023. Redesigned by Tanmay</p>
      <ScrollToTop />
    </>
  );
}

export default App;