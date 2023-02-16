import './App.css';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
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
      "",
    ],
    "funfact_highlights": [
      "",
    ],
    "email": "",
    "intro_text": "",
    "intro_terms": {
      "first": "",
      "second": "",
    },
    "intro_desc": ``,
    "ps": {
      "ref": "",
      "status": ""
    },
    "quote": {
      "author": ``,
      "text": ``,
    },
    "contacts": {
      "twitter": `sarkartanmay393`,
      "github": `sarkartanmay393`,
      "linkedin": "tanmaysrkr",
    },
    "about_me": {
      "intro": ``,
      "p1": ``,
      "p2": ``,
      "p3": ``,
    },
    "footer_desc": "",
    "skills": {
      "tools": [""],
      "cloud": [""],
      "frameworks": [""],
      "databases": [""],
      "languages": [""],
      "others": [""]
    },
    "projects": [
      {
        "title": "",
        "madeby": "",
        "demo": "",
        "image": "",
        "url": "",
        "description": "",
        "workType": ""
      },
    ]
  });
  const [isMobile, setIsMobile] = useState(true);

  // const [scrollPosition, setScrollPosition] = useState(0);
  // const ScrollPositionCtx = createContext(scrollPosition);

  // For setting current screen scroll position in global css variable
  window.onscroll = () => {
    let scrollPosition = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    document.body.style.setProperty('--scroll', scrollPosition);
    // setScrollPosition(scrollPosition);
  };

  useEffect(() => {
    setIsMobile(window.screen.width < 600);
    const syncWebsiteData = async (db) => {
      const snapshot = await getDocs(collection(db, 'body-info'));
      const data = snapshot.docs[0];

      setWebsiteData({
        funfacts: data.get('funfacts'),
        funfact_highlights: data.get('funfact-highlights'),
        email: data.get('email'),
        intro_terms: {
          first: data.get('intro-terms')[0],
          second: data.get('intro-terms')[1],
        },
        footer_desc: data.get('footer-description'),
        intro_desc: data.get('intro-description'),
        intro_text: data.get('intro-text'),
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

    document.body.style.setProperty("--screenWidth", window.screen.width);
    syncWebsiteData(db);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const TabOne = () => {
    return (
      <>
        <IntroCard intro_text={websiteData.intro_text} term_first={websiteData.intro_terms.first} term_second={websiteData.intro_terms.second} ps_ref={websiteData.ps.ref} ps_status={websiteData.ps.status} description={websiteData.intro_desc} />
        <QuoteCard quote={websiteData.quote.text} author={websiteData.quote.author} />
        <BlogSection />
        <ProjectSection projects={websiteData.projects} />
        <SkillSection
          languages={websiteData.skills.languages}
          frameworks={websiteData.skills.frameworks}
          cloud={websiteData.skills.cloud}
          others={websiteData.skills.others}
          tools={websiteData.skills.tools}
          databases={websiteData.skills.databases}
        />
        <AboutSection {...websiteData.about_me} />
        <ContactSection contacts={websiteData.contacts} email={websiteData.email} />
      </>
    );
  }



  return (
    // <ScrollPositionCtx.Provider value={scrollPosition}>
    <BrowserRouter>
      {isMobile ? <></> : <FollowLine />}
      <header>
        <NavBar />
      </header>
      <main id='home'>
        <section className='main-components'>
          <Switch>
            <Route exact path='/'>
              {TabOne}
            </Route>
            <Route path='/projects'>
              <ProjectsPage weeksOfWork={websiteData.projects.filter(value => value.workType === "big")} daysOfWork={websiteData.projects.filter(value => value.workType === "small")} />
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
        <FooterCard desc={websiteData.footer_desc} contacts={websiteData.contacts} email={websiteData.email} />
        <p id='copyright-tag'>© Copyright 2023. Redesigned by Tanmay</p>
      </footer>
      <ScrollToTop />
    </BrowserRouter>
    // </ScrollPositionCtx.Provider>
  );
}



export default App;