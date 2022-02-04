import React from 'react';
import {BsBookmarkHeart} from 'react-icons/bs'

function NavigationBar() {

  return (
    <div className='navBar'>
      <a href='/'>Advertisements</a>
      <a href="/"> 
      <span>Saved </span> 
      <span><BsBookmarkHeart/></span>
      </a>
  </div>
  ); 
  
}

export default NavigationBar;
