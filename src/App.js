import './App.css';
import NavBar from './components/NavBar';
import FollowLine from './components/FollowLine';
import IntroCard from './components/IntroCard';
import QuoteCard from './components/QuoteCard';
import ProjectSection from './components/ProjectSection';
import FooterCard from './components/FooterCard';


function App() {
  return (
    <>
      {/* <FollowLine /> */}
      <header>
        <div className='invisible-space'></div>
        <NavBar />
      </header>
      <main>
        <div className='invisible-space-m'></div>
        <section className='main-components'>
          <IntroCard />
          <QuoteCard />
          <ProjectSection />
        </section>
        {/* <FooterCard /> */}
      </main>
    </>
  );
}

export default App;
