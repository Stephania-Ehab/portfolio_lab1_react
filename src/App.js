// import logo from './logo.svg';
import './App.css';
import HeroSection from './components/hero/hero.js';
import BioSection from './components/bio/bio.js';
import SkillsSection from './components/skills/skills.js'
import EducationSection from './components/education/education.js'
import Footer from './components/footer/footer.js'

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <BioSection/>
      <SkillsSection/>
      <EducationSection/>
      <Footer/>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
