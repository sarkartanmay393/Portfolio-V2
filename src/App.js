import './App.css';
import NavBar from './components/NavBar';
import FollowLine from './components/FollowLine';
import IntroCard from './components/IntroCard';
import QuoteCard from './components/QuoteCard';


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
      </main>
      <footer></footer>
    </>
  );
}

export default App;
