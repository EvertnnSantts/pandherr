import './App.css';
import React from 'react';
//components:
import Header from './components/Header';
import Home from '../src/components/Home';
import Ideal from '../src/components/Ideal';
import Carousel from '../src/components/Carousel';
import Build from '../src/components/Build';

function App() {
  return (
    <div className="App">
     <router>
      <Header/>
      <Home/>
      <Ideal/>
      <Carousel/>
      <Build/>
     </router>
    </div>
  );
}

export default App;
