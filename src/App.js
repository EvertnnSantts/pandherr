import './App.css';
import React from 'react';
//components:
import Header from '../src/components/Header';
import Home from '../src/components/Home';

function App() {
  return (
    <div className="App">
     <router>
      <Header/>
      <Home/>
     </router>
    </div>
  );
}

export default App;
