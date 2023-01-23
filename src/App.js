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
      <header>
        <FollowLine />
        <NavBar />
      </header>
      <main>
        <IntroCard />
        <QuoteCard />
        <ProjectSection />
        {/* <FooterCard /> */}
      </main>
    </>
  );
}

export default App;
