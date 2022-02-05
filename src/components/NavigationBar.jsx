import React from 'react';
import {BsBookmarkHeart} from 'react-icons/bs';
import { Link } from "react-router-dom";

function NavigationBar({savedNum}) {

  return (
    <div className='navBar'>
      <Link to='/'>Advertisements</Link>
      <Link to="/saved"> 
      <span>Saved </span> 
      <span><BsBookmarkHeart/></span>
      </Link>
      <div className='adv-num'>{savedNum}</div>
  </div>
  ); 
  
}

export default NavigationBar;
