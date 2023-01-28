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


function App() {
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
          {/* <ProjectSection /> */}
          {/* <SkillSection />
            <AboutSection />
            <ContactSection /> */}
        </section>
      </main>
      {/* <footer>
        <div className='invisible-space-m'></div>
        <FooterCard />
      </footer> */}
      <p id='copyright-tag'>© Copyright 2023. Redesigned by Tanmay</p>
      <ScrollToTop />
    </>
  );
}

export default App;
