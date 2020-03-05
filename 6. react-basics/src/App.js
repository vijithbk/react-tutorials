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
import Form from './components/9_form.js'
import MountingLifeCycleMethodsA from './components/10_mounting_life_cycle_method';
import FragmentDemo from './components/11_Fragment'
import FragmentTable from './components/12_FragmentTable'
import ParentComp from './components/13_parent_comp'
import ParentComponent2 from './components/14_parent_comp'
import Refs from './components/15_refs_1'
import Portals from './components/16_portals'

function App() {
  return (
    <div className="App">
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}

      {/* <Hello /> */}
      {/* <State /> */}
      {/* <Counter /> */}
      {/* <EventBinding /> */}
      {/* <ParentComponent /> */}
      {/* <ConditionalRendering /> */}
      {/* <ListRendering /> */}
      {/* <StyleSheet isPrimary={true} /> */}
      {/* <InlineStyles /> */}
      {/* <Form /> */}
      {/* <MountingLifeCycleMethodsA /> */}
      {/* <FragmentDemo /> */}
      {/* <FragmentTable /> */}
      {/* <ParentComp /> */}
      {/* <ParentComponent2 /> */}
      {/* <Refs /> */}
      <Portals />
    </div>
  );
}

export default App;
