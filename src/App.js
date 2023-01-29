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
import { useEffect, useRef, useState } from 'react';


function App({ db }) {
  const [websiteData, setWebsiteData] = useState({
    email: "",
    intro_desc: "",
    ps: {
      ref: "",
      status: "",
    },
    quote: {
      author: "",
      text: "",
    },
    skills: {
      databases: [""],
      frameworks: [""],
      languages: [""],
      cloud: [""],
      tools: [""],
      others: [""],
    },
    projects: [{
      demo: "",
      madeBy: "",
      title: "",
      description: "",
      url: "",
      image: "",
    },],
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
        skills: data.get('skills'),
        projects: data.get('projects'),
      });
    }

    syncWebsiteData(db);
  }, [db]);

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
          <IntroCard />
          <QuoteCard />
          <ProjectSection />
          <SkillSection />
          <AboutSection />
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
