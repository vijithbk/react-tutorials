import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './components/1_jsx'
import State from './components/2_state'
import Counter from './components/3_counter'
import EventBinding from './components/4_event_binding'
import ParentComponent from './components/5_parent';
import ConditionalRendering from './components/6_conditional_rendering';
import ListRendering from './components/7_list_rendering';

function App() {
  return (
    <div className="App">
      {/* <Hello /> */}
      {/* <State /> */}
      {/* <Counter /> */}
      {/* <EventBinding /> */}
      {/* <ParentComponent /> */}
      {/* <ConditionalRendering /> */}
      <ListRendering />
    </div>
  );
}

export default App;
