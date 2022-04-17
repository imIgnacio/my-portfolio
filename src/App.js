import logo from './logo.svg';
import './App.css';

import Selfie from './components/Selfie.js';
import Preview from './components/Preview.js';
import Experience from './components/experience/Experience.js';
import Education from './components/eductation/Education.js';
import Languages from './components/languages/Languages.js';
import Skills from './components/skills/Skills.js';
import Projects from './components/projects/Projects.js';

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
        <Projects/>
      </main>
    </div>
  );
}

export default App;
