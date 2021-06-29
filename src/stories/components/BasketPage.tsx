import React from 'react';

import bball from './Basketball.svg';
import '../../App.css';

// import { Header } from './Header';
import './basketPage.css';

interface PageProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const BasketPage = ({ user, onLogin, onLogout, onCreateAccount }: PageProps) => (
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
