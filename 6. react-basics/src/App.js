import React from 'react';
import logo from './logo.svg';
import './App.css';

import './components/8_appStyles.css';
import styles from './components/8_appStyles.module.css';

import Hello from './components/1_jsx'
import State from './components/2_state'
import Counter from './components/3_counter'
import EventBinding from './components/4_event_binding'
import ParentComponent from './components/5_parent';
import ConditionalRendering from './components/6_conditional_rendering';
import ListRendering from './components/7_list_rendering';
import StyleSheet from './components/8_stylesheets';
import InlineStyles from './components/8_inline_styles';

function App() {
  return (
    <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <Hello /> */}
      {/* <State /> */}
      {/* <Counter /> */}
      {/* <EventBinding /> */}
      {/* <ParentComponent /> */}
      {/* <ConditionalRendering /> */}
      {/* <ListRendering /> */}
      {/* <StyleSheet isPrimary={true} /> */}
      <InlineStyles />
    </div>
  );
}

export default App;
