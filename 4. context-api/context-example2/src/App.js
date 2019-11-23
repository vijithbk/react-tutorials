import React from 'react';

import MenuCustom from './MenuCustom';
import Body from './Body';
import Footer from './Footer';
import ThemeContext from './ThemeContext';

import logo from './logo.svg';
import './App.css';

function App() {
  const user = { name: 'Vijith', theme: 'monochrome', content: 'Hello users', menu: 'Home | About me' }
  return (
    <ThemeContext.Provider value={user}>
      <div className="App">
        <header className="App-header">
          Header
        </header>
        <Body></Body>
        <MenuCustom />
        <Footer></Footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
