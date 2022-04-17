import logo from './logo.svg';
import './App.css';

import Selfie from './components/Selfie';
import Preview from './components/Preview';
import Experience from './components/experience/Experience';
import Education from './components/eductation/Education';
import Languages from './components/languages/Languages';
import Skills from './components/skills/Skills';
import Hobby from './components/hobby/Hobby';

function App() {

  return (
    <div className="App">
      <header>
        <Selfie/>
        <Preview/>
      </header>
      <main>
        <Experience/>
        <Education/>
        <Languages/>
        <Skills/>
      </main>
    </div>
  );
}

export default App;
