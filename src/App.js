import logo from './logo.svg';
import './App.css';

import Selfie from './components/Selfie';
import Preview from './components/Preview';

function App() {

  return (
    <div className="App">
      <header>
        <Selfie/>
        <Preview/>
      </header>
    </div>
  );
}

export default App;
