import React from 'react';
// import logo from './logo.svg';
// import bball from './Basketball.svg';
import bball from './stories/assets/Basketball.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-image">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={bball} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
