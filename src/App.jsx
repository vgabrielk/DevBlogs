import React, { Component } from 'react';

import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import News from './components/News/News'
import './App.css'




function App(){

  
  
  setTimeout(()=>{
    let modal = document.querySelector('.modal-alert')
    modal.style.opacity="1"
  },5000)
  
  let CloseModal = () =>{
    let modal = document.querySelector('.modal-alert')
    modal.style.display="none"
  }

    return (
      <div className="App">

        <div className="modal-alert">
            <button className="button_close" onClick={CloseModal}>
            <i class="fas fa-times"></i>
            </button>
          <h2 className="modal-alert__title text-light">Conhece meu github?</h2>
            <a className='href' href="https://github.com/vgabrielk">
          <button className="modal-alert__button">
            Conhecer <i class="fab fa-github"></i>

          </button>
            </a>
        </div>
        <Header user="vgabrielk"/>
        <Welcome/>
        <News/>
      </div>
                
    );
  }


export default App;
