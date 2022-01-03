import React, { Component } from 'react';

import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import News from './components/News/News'
import './App.css'




function App(){

    return (
      <div className="App">
        <Header user="vgabrielk"/>
        <Welcome/>
        <News/>
      </div>
      
    );
  }


export default App;
