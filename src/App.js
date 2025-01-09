import './App.css';
import React from 'react';
//components:
import Header from './components/Header';
import Home from '../src/components/Home';
import Ideal from '../src/components/Ideal';

function App() {
  return (
    <div className="App">
     <router>
      <Header/>
      <Home/>
      <Ideal/>
     </router>
    </div>
  );
}

export default App;
