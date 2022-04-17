import logo from './logo.svg';
import './App.css';

import Selfie from './components/Selfie';
import Preview from './components/Preview';
import Experience from './components/experience/Experience';
import Education from './components/eductation/Education';
import Languages from './components/languages/Languages';

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
      </main>
    </div>
  );
}

export default App;
