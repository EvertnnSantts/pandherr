import './App.css';
import React from 'react';
//components:
import Header from './components/Header';
import Home from '../src/components/Home';
import Ideal from '../src/components/Ideal';
import Carousel from '../src/components/Carousel';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div className="App">
     <router>
      <Header/>
      <Home/>
      <Ideal/>
      <Carousel/>
      <Footer/>
     </router>
    </div>
  );
}

export default App;
