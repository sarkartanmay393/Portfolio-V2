import './App.css';
import Data from "./data/WebsiteData.json";
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
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [websiteData, setWebsiteData] = useState({
    "funfacts": Data['funfacts'],
    "funfact_highlights": Data['funfact-highlights'],
    "email": Data['email'],
    "intro_text": Data['intro-text'],
    "intro_terms": Data['intro-terms'],
    "intro_desc": Data['intro-description'],
    "ps": Data['ps'],
    "quote": Data['quote'],
    "contacts": Data['contacts'],
    "about_me": Data['about-me'],
    "footer_desc": Data['footer-description'],
    "skills": Data['skills'],
    "projects": Data['projects']
  });

  const [isMobile, setIsMobile] = useState(true);

  // For setting current screen scroll position in global css variable
  window.onscroll = () => {
    let scrollPosition = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    document.body.style.setProperty('--scroll', scrollPosition);
  };

  useEffect(() => {
    if (false) { setWebsiteData() }
    setIsMobile(window.screen.width < 600);
    document.body.style.setProperty("--screenWidth", window.screen.width);
  }, []);

  const TabOne = () => {
    return (
      <>
        <IntroCard
          intro_text={websiteData.intro_text}
          term_first={websiteData.intro_terms.first}
          term_second={websiteData.intro_terms.second}
          ps_ref={websiteData.ps.ref}
          ps_status={websiteData.ps.status}
          description={websiteData.intro_desc} />
        <QuoteCard
          quote={websiteData.quote.text}
          author={websiteData.quote.author} />
        <BlogSection />
        <ProjectSection
          projects={websiteData.projects} />
        <SkillSection
          languages={websiteData.skills.languages}
          frameworks={websiteData.skills.frameworks}
          cloud={websiteData.skills.cloud}
          others={websiteData.skills.others}
          tools={websiteData.skills.tools}
          databases={websiteData.skills.databases}
        />
        <AboutSection {...websiteData.about_me} />
        <ContactSection
          contacts={websiteData.contacts}
          email={websiteData.email} />
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
              <ProjectsPage
                weeksOfWork={websiteData.projects.filter(value => value.workType === "big")}
                daysOfWork={websiteData.projects.filter(value => value.workType === "small")} />
            </Route>
            <Route path='/about'>
              <AboutPage
                {...websiteData.about_me}
                funfacts={websiteData.funfacts}
                funfact_highlights={websiteData.funfact_highlights} />
            </Route>
            <Route path='*'>
              {NotFoundPage}
            </Route>
          </Switch>
        </section>
      </main>
      <footer>
        <FooterCard
          desc={websiteData.footer_desc}
          contacts={websiteData.contacts}
          email={websiteData.email} />
        <p id='copyright-tag'>© Copyright 2023. Redesigned by Tanmay</p>
      </footer>
      <ScrollToTop />
    </BrowserRouter>
    // </ScrollPositionCtx.Provider>
  );
}



export default App;