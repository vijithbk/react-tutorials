import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './components/1_jsx'
import State from './components/2_state'
import Counter from './components/3_counter'

function App() {
  return (
    <div className="App">
      {/* <Hello /> */}
      {/* <State /> */}
      <Counter />
    </div>
  );
}

export default App;
