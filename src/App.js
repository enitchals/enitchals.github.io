import './App.css';
import Background from './Background';
import Projects from './Projects';
import Art from './Art';
import { useState } from 'react';

function App() {
  const [selection, setSelection] = useState('background')
  return (
    <div className="App">
      <h1 className='header'>Ellen Nitchals</h1>
      <div>
      <button className='nav-button' onClick={() => setSelection('background')}>About Me</button>
      <button className='nav-button' onClick={() => setSelection('projects')}>Projects</button>
      <button className='nav-button' onClick={() => setSelection('art')}>Artwork</button>
      </div>
      {selection === 'background' ? <Background/> : null}
      {selection === 'projects' ? <Projects/> : null}
      {selection === 'art' ? <Art/> : null}
    </div>
  );
}

export default App;
