import React from 'react';

import UserContext from './UserContext'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import ComponentD from './ComponentD';

import './App.css';

function App() {
  const userInformation = { id: '0001', username: 'vijith', name: 'Vijith', type: 'guest' }
  return (
    <UserContext.Provider value={userInformation}>
      <div className="App">
        <header className="App-header">
          React Context API Example
        </header>
        <ComponentA />
        <ComponentB />
        <ComponentC />
        <ComponentD />
      </div>
    </UserContext.Provider>
  );
}

export default App;
