import './App.css';
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import NavBar from './components/NavBar';
import FollowLine from './components/FollowLine';
import IntroCard from './components/IntroCard';
import QuoteCard from './components/QuoteCard';
import BlogSection from './components/BlogCard';
import ProjectSection from './components/ProjectSection';
import SkillSection from './components/SkillSection';
import AboutSection from './components/AboutMe';
import ContactSection from './components/ContactCard';
import FooterCard from './components/FooterCard';
import ScrollToTop from './components/ScrollToTop';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



function App({ db }) {
  const [websiteData, setWebsiteData] = useState({
    "funfacts": [
      "I like winter more than summer",
      "I often motorbike with my friends",
      "I like momos",
      "My current favourite show is The Witcher",
      "And current anime is Naruto",
    ],
    "funfact_highlights": [
      "momos",
      "winter",
      "summer",
      "The Witcher",
      "Naruto",
    ],
    "all_projects": {
      "weeks_of_works": [
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
      ],
      "days_of_works": [
        {
          "title": "Gaze Weather",
          "madeby": "React, Firebase",
          "demo": "gazeweather.web.app/",
          "url": "https://github.com/sarkartanmay393/Gaze-Weather-JS",
          "description": "Contains a weather interface with main stream informations about your location."
        },
        {
          "title": "Text Lead Tracker",
          "madeby": "HTML, CSS, JS",
          "demo": "https://textlead-tracker-393.netlify.com",
          "url": "https://github.com/sarkartanmay393/TextLead-Tracker",
          "description": "Contains raw HTML, CSS and JS code of a Chrome Extension to save quickies."
        },
      ],
    },
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
      ],
      "others": [
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
  const [isMobile, setIsMobile] = useState(true);


  useEffect(() => {
    setIsMobile(window.screen.width < 600);
    const syncWebsiteData = async (db) => {
      const snapshot = await getDocs(collection(db, 'body-info'));
      const data = snapshot.docs[0];

      setWebsiteData({
        funfacts: data.get('funfacts'),
        funfact_highlights: data.get('funfact-highlights'),
        all_projects: {
          "weeks_of_works": [
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
          ],
          "days_of_works": [
            {
              "title": "Gaze Weather",
              "madeby": "React, Firebase",
              "demo": "gazeweather.web.app/",
              "url": "https://github.com/sarkartanmay393/Gaze-Weather-JS",
              "description": "Contains a weather interface with main Contains a weather interface with main Contains a weather interface with main Contains a weather interface with main Contains a weather interface with main Contains a weather interface with main Contains a weather interface with main Contains a weather interface with main Contains a weather interface with main Contains a weather interface with main Contains a weather interface with main Contains a weather interface with main Contains a weather interface with main Contains a weather interface with main Contains a weather interface with main Contains a weather interface with main stream informations about your location."
            },
            {
              "title": "Text Lead Tracker",
              "madeby": "HTML, CSS, JS",
              "demo": "https://textlead-tracker-393.netlify.com",
              "url": "https://github.com/sarkartanmay393/TextLead-Tracker",
              "description": "Contains raw HTML, CSS and JS code of a Chrome Extension to save quickies."
            },
          ],
        },
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

  const TabOne = () => {
    return (
      <>
        <IntroCard term_first={websiteData.intro_terms.first} term_second={websiteData.intro_terms.second} ps_ref={websiteData.ps.ref} ps_status={websiteData.ps.status} description={websiteData.intro_desc} />
        <QuoteCard quote={websiteData.quote.text} author={websiteData.quote.author} />
        <BlogSection />
        <ProjectSection projects={websiteData.projects} />
        <SkillSection Skills={websiteData.skills} />
        <AboutSection {...websiteData.about_me} />
        <ContactSection contacts={websiteData.contacts} email={websiteData.email} />
      </>
    );
  }

  const NotFoundPage = () => {
    return (
      <>
        <h1 style={{ textAlign: "center", color: "white", height: "60vh", display: "grid", alignItems: "center" }}>
          404: Page not found!
        </h1>
      </>
    );
  }


  return (
    <BrowserRouter>
      {isMobile ? <></> : <FollowLine />}
      <header>
        <div className='invisible-space'></div>
        <NavBar />
      </header>
      <main id='home'>
        <section className='main-components'>
          <Switch>
            <Route exact path='/'>
              {TabOne}
            </Route>
            <Route path='/projects'>
              <ProjectsPage weeksOfWork={websiteData.all_projects.weeks_of_works} daysOfWork={websiteData.all_projects.days_of_works} />
            </Route>
            <Route path='/about'>
              <AboutPage {...websiteData.about_me} funfacts={websiteData.funfacts} funfact_highlights={websiteData.funfact_highlights} />
            </Route>
            <Route path='*'>
              {NotFoundPage}
            </Route>
          </Switch>
        </section>
      </main>
      <footer>
        <div className='invisible-space-m'></div>
        <FooterCard desc={websiteData.footer_desc} contacts={websiteData.contacts} email={websiteData.email} />
      </footer>
      <p id='copyright-tag'>© Copyright 2023. Redesigned by Tanmay</p>
      <ScrollToTop />
    </BrowserRouter>

  );
}



export default App;